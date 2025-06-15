# Elevator System: Interview Q&A

This file contains MAANG-style interview questions and answers related to the Elevator System design.

<details>
<summary><strong>Q1: How would you start designing this system? What are the most critical components and requirements you'd clarify first?</strong></summary>

My approach would be to first scope the problem by clarifying requirements. I'd ask:
1.  **Scale:** How many floors and elevators are we designing for? This impacts the choice of scheduling algorithm and data structures.
2.  **Use Case:** Is it a residential building (low traffic) or a corporate skyscraper (high, patterned traffic)? This influences the scheduling strategy.
3.  **Core Objects:** I would identify the main actors and components: `User`, `ElevatorCar`, `ElevatorSystem` (the controller), `Floor`, `Button`, and `Request`.
4.  **Core Actions:** The primary actions are `requestElevator` (external) and `selectFloor` (internal).
5.  **Constraints:** What are the safety and performance requirements? (e.g., max capacity, speed, acceptable wait time).

The most critical components are the `ElevatorSystem`, which acts as the central coordinator, and the `ElevatorCar`, which represents the physical unit. The interaction and state management between these two are the heart of the design.
</details>

<details>
<summary><strong>Q2: You used the State design pattern. Can you explain why it's a good fit and what an alternative would look like?</strong></summary>

The **State pattern** is an excellent fit because an elevator's behavior is fundamentally dependent on its current state. For example:
*   In an `IdleState`, a new request makes it start moving.
*   In a `MovingUpState`, it will only stop for requests that are above it and in the same direction, or for internal requests within its path. It will ignore requests to go down.

Using the State pattern, we encapsulate this state-specific logic into separate classes (`IdleState`, `MovingUpState`, `MovingDownState`). The `ElevatorCar` class simply delegates calls to its current state object. This results in clean, maintainable code that adheres to the Open/Closed Principle—we can add new states (like `MaintenanceState`) without modifying the `ElevatorCar` class.

**Alternative:** Without the State pattern, the `ElevatorCar`'s main `run()` or `handleRequest()` method would become a massive `if/else if/else` or `switch` statement based on an enum like `elevatorStatus`.

```java
// Anti-pattern example
void handleRequest(Request req) {
    if (this.status == Status.IDLE) {
        // logic for idle
    } else if (this.status == Status.MOVING_UP) {
        // logic for moving up
    } else if (this.status == Status.MOVING_DOWN) {
        // logic for moving down
    }
}```

This is brittle, hard to read, and difficult to extend. Every new state requires modifying this central, complex method, increasing the risk of bugs.

</details>


<details>
<summary><strong>Q3: How do you handle multiple simultaneous requests? Describe the concurrency model.</strong></summary>
Concurrency is critical. My design handles it in a few key ways:

Central Request Queue: All incoming requests (from any Button) are converted into Request objects and placed into a single, centralized java.util.concurrent.BlockingQueue within the ElevatorSystem. This queue is inherently thread-safe, managing concurrent writes from multiple button presses without data corruption.

Dispatcher Thread: The ElevatorSystem runs a dedicated dispatcher thread. Its only job is to continuously take() a Request from the blocking queue. This serializes the processing of requests at the system level.

Concurrent Elevators: Each ElevatorCar object runs in its own thread. After the dispatcher assigns a request to an elevator, that elevator processes it independently. For instance, Elevator A can be moving from floor 1 to 5 while Elevator B is moving from 10 to 3.

Thread-Safe Data Structures: Within each elevator, the set of destination floors (destinationFloors in my class diagram) must be a thread-safe collection, like ConcurrentSkipListSet in Java. This allows the dispatcher thread to safely add new destinations while the elevator's own thread is iterating over and removing destinations.

This model decouples request submission from request processing and allows elevators to operate in parallel, which is an accurate reflection of the real world.

</details>


<details>
<summary><strong>Q4: Your design works for a single elevator. How do you scale it to a building with multiple elevators? This is where the scheduling algorithm comes in.</strong></summary>
Scaling to multiple elevators is the primary responsibility of the ElevatorSystem and is why the Strategy Pattern is so valuable.

When the dispatcher thread pulls a request from the queue, it doesn't just blindly assign it. Instead, it invokes the configured SchedulingStrategy:

```java
// Inside ElevatorSystem's dispatcher thread
Request newRequest = requestQueue.take();
ElevatorCar bestElevator = schedulingStrategy.scheduleElevator(this.elevators, newRequest);
bestElevator.addRequest(newRequest);
```


The scheduleElevator method within the strategy object contains the logic to pick the best elevator. Here are a few possible strategies:

NearestCarStrategy (Simple): Find the closest idle elevator. If all are busy, find the one that is moving towards the request floor and can serve it without deviating too much.

LookAheadStrategy (Advanced): This is a version of the SCAN algorithm. It considers not just the current position but also the current direction and existing destination queue of each elevator. It calculates a "cost" for each elevator to serve the new request and picks the one with the lowest cost. The cost could be a function of estimated wait time and travel time.

ZoningStrategy: In very tall buildings, you can assign certain elevators to serve specific zones (e.g., floors 1-20, 21-40) to minimize travel distance.

By using the Strategy pattern, we can start with a simple NearestCarStrategy and upgrade to a more sophisticated LookAheadStrategy later without changing any part of the ElevatorSystem or ElevatorCar code. We just inject a different strategy object at initialization.

</details>


<details>
<summary><strong>Q5: What are some important edge cases, and how would your design handle them?</strong></summary>
Handling edge cases is crucial for a robust system. Here are a few:

Emergency Stop:

An emergencyStop() method would be added to the ElevatorCar.

This would immediately transition the car to an OutOfServiceState.

In this state, the elevator ignores all movement commands until it is reset by a maintenance command. It would also log an alert.

Door Obstruction:

The ElevatorCar would have a door.isObstructed() check.

If the door fails to close after a few retries, the car would enter a MaintenanceState, keep its doors open, and signal an alarm. It would be removed from the pool of available elevators in the ElevatorSystem.

Power Failure:

The system should be connected to a backup power source (UPS).

Upon power loss detection, the ElevatorSystem could issue a special command to all elevators: "Proceed to the nearest/designated floor and open doors." This prevents people from being trapped. The system would then enter a suspended state.

User Presses a button for the current floor:

The logic would simply ignore this request, as the destination is already met. The addRequest method would check if destinationFloor == currentFloor and do nothing.

Elevator is full (Weight sensor):

The ElevatorCar would have a isAtMaxCapacity() method.

If true, the car would not accept any new stops for external pickups (it would still serve its internal destinations). The display might show "Full".

</details>