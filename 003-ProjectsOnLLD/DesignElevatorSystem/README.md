# Design: Elevator System

This document outlines the Low-Level Design (LLD) for a multi-elevator, multi-floor control system.

## 1. Problem Statement

Design a software system to control a set of elevators in a building. The system should efficiently transport passengers between floors, handling requests from both inside the elevators and on the building floors.

### Core Requirements

#### Functional Requirements:
1.  **Request Handling:** Users can request an elevator from any floor by pressing an "Up" or "Down" button (External Request).
2.  **Destination Selection:** Once inside, users can select a destination floor using a numeric keypad (Internal Request).
3.  **Elevator Movement:** The elevator must move between floors to serve requests.
4.  **Door Operation:** Doors must open upon arrival and close before departure.
5.  **Display:** Each elevator should have a display showing its current floor and direction of movement. Floor panels should indicate which elevator is arriving.
6.  **Multiple Elevators:** The system should be able to manage and coordinate multiple elevators to optimize wait times.

#### Non-Functional Requirements:
1.  **Scalability:** The system should be configurable for a variable number of floors and elevators.
2.  **Reliability:** The system should be robust and handle edge cases gracefully (e.g., emergency stop).
3.  **Concurrency:** The system must handle simultaneous requests from multiple users in a thread-safe manner.
4.  **Extensibility:** The scheduling logic should be easily replaceable (e.g., swapping a simple algorithm for a more advanced one).

## 2. Approach & Design Patterns

Our design is centered around a clear separation of concerns, using well-established design patterns to manage state, behavior, and requests.

### Core Components:
*   **ElevatorSystem (Singleton):** The central controller that manages all elevators and dispatches requests. It acts as the brain of the system.
*   **ElevatorCar:** Represents an individual elevator. It maintains its own state (floor, direction, requests) and operates independently based on commands from the `ElevatorSystem`.
*   **Request:** A data object representing a user's press of a button, either internal or external.
*   **State Machine:** The behavior of an `ElevatorCar` is modeled as a state machine.

### Design Patterns Applied:

1.  **State Pattern:**
    *   **Why:** An elevator's behavior changes drastically based on its current state (e.g., `Idle`, `MovingUp`, `MovingDown`).
    *   **How:** We define an `ElevatorState` interface with methods like `handleRequest()`. Concrete classes like `IdleState`, `MovingUpState`, and `MovingDownState` implement this interface. The `ElevatorCar` object holds a reference to a state object and delegates its behavior to it. This avoids massive `if/else` or `switch` statements in the `ElevatorCar` class.

2.  **Strategy Pattern:**
    *   **Why:** The algorithm for assigning an elevator to a request can vary (e.g., nearest elevator, least busy elevator, etc.). We need a way to switch this logic without changing the core system.
    *   **How:** We define a `SchedulingStrategy` interface with a method `scheduleElevator()`. Concrete strategies like `NearestCarStrategy` or `LookAheadStrategy` can be implemented. The `ElevatorSystem` is configured with a specific strategy to make scheduling decisions.

3.  **Command Pattern:**
    *   **Why:** User actions (pressing buttons) generate requests that need to be processed. We want to decouple the button (invoker) from the elevator system (receiver).
    *   **How:** We can model requests as `Command` objects (e.g., `InternalRequestCommand`, `ExternalRequestCommand`). These commands are placed into a central request queue. The `ElevatorSystem` has a worker thread that continuously pulls commands from this queue and executes them. This encapsulates a request as an object.

4.  **Singleton Pattern:**
    *   **Why:** There should only be one central `ElevatorSystem` managing all resources in the building.
    *   **How:** The `ElevatorSystem` class is implemented as a singleton to ensure a single point of control and coordination.

### Concurrency
*   A central, thread-safe `BlockingQueue` will hold all incoming `Request` objects.
*   The `ElevatorSystem` will have a dispatcher thread that reads from this queue.
*   Each `ElevatorCar` will run in its own thread, processing its assigned destination queue, simulating movement, and updating its state. This allows elevators to operate concurrently.

## 3. Class Design

| Class/Interface       | Description                                                                                             | Key Attributes & Methods                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **`ElevatorSystem`**  | (Singleton) The main controller. Manages elevators and dispatches requests.                             | `elevators: List<ElevatorCar>`, `schedulingStrategy: SchedulingStrategy`, `getInstance()`, `dispatchRequest(Request)` |
| **`ElevatorCar`**     | Represents a single elevator car. Runs in its own thread.                                               | `id: int`, `currentFloor: int`, `state: ElevatorState`, `internalRequests: Set<Integer>`, `run()`, `move()`           |
| **`ElevatorState`**   | (Interface) Defines the behavior of an elevator in a particular state.                                  | `handleRequest(ElevatorCar, Request)`                                                                                  |
| **`IdleState`**       | Concrete state. The elevator is stationary with doors closed.                                           | `handleRequest(...)`                                                                                                   |
| **`MovingUpState`**   | Concrete state. The elevator is moving upwards.                                                         | `handleRequest(...)`                                                                                                   |
| **`MovingDownState`** | Concrete state. The elevator is moving downwards.                                                       | `handleRequest(...)`                                                                                                   |
| **`Request`**         | A data class representing a user request.                                                               | `sourceFloor: int`, `destinationFloor: int`, `direction: Direction`, `requestType: RequestType`                      |
| **`Direction`**       | (Enum) `UP`, `DOWN`, `IDLE`.                                                                            |                                                                                                                        |
| **`RequestType`**     | (Enum) `INTERNAL`, `EXTERNAL`.                                                                          |                                                                                                                        |
| **`SchedulingStrategy`** | (Interface) Defines the algorithm for assigning elevators.                                             | `scheduleElevator(List<ElevatorCar>, Request): ElevatorCar`                                                            |
| **`NearestCarStrategy`** | Concrete strategy. Assigns the closest idle elevator to a request.                                      | `scheduleElevator(...)`                                                                                                |
| **`Button`**          | Represents a physical button.                                                                           | `FloorButton`, `ElevatorButton`. `press()` method creates a `Request` and sends it to `ElevatorSystem`.              |