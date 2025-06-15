# UML Diagrams for Elevator System

This file contains the Mermaid diagrams for the Class, State, and Sequence flows.

---

## 1. Class Diagram

This diagram shows the classes, their attributes, methods, and the relationships between them (inheritance, aggregation, composition).

```mermaid
classDiagram
    class Direction {
        <<enumeration>>
        +UP
        +DOWN
        +IDLE
    }

    class ElevatorSystem {
        <<singleton>>
        - List~ElevatorCar~ elevators
        - SchedulingStrategy schedulingStrategy
        + getInstance() ElevatorSystem
        + dispatchRequest(Request)
    }

    class ElevatorCar {
        - int id
        - int currentFloor
        - ElevatorState state
        - Direction direction
        - Set~int~ destinationFloors
        + run()
        + move()
        + setState(ElevatorState)
    }

    class Request {
        - int sourceFloor
        - int destinationFloor
        - Direction direction
    }

    class ElevatorState {
        <<interface>>
        + handleRequest(ElevatorCar, Request)
        + updateState(ElevatorCar)
    }

    class IdleState {
        + handleRequest(ElevatorCar, Request)
        + updateState(ElevatorCar)
    }

    class MovingUpState {
        + handleRequest(ElevatorCar, Request)
        + updateState(ElevatorCar)
    }

    class MovingDownState {
        + handleRequest(ElevatorCar, Request)
        + updateState(ElevatorCar)
    }

    class SchedulingStrategy {
        <<interface>>
        + scheduleElevator(List~ElevatorCar~, Request) ElevatorCar
    }

    class NearestCarStrategy {
        + scheduleElevator(List~ElevatorCar~, Request) ElevatorCar
    }

    ElevatorSystem "1" *-- "many" ElevatorCar : manages
    ElevatorSystem o-- SchedulingStrategy : uses
    ElevatorSystem ..> Request : processes

    ElevatorCar *-- ElevatorState : has
    ElevatorCar --> Direction : uses

    ElevatorState <|.. IdleState
    ElevatorState <|.. MovingUpState
    ElevatorState <|.. MovingDownState

    SchedulingStrategy <|.. NearestCarStrategy
```
---

## 2. State Diagram
This diagram illustrates the possible states of an ElevatorCar and the transitions between them.

```mermaid
stateDiagram-v2
    [*] --> Idle

    Idle --> MovingUp : request above
    Idle --> MovingDown : request below

    MovingUp --> Idle : no more requests
    MovingUp --> MovingUp : stop at floor & continue up
    MovingUp --> MovingDown : reverse at top

    MovingDown --> Idle : no more requests
    MovingDown --> MovingDown : stop at floor & continue down
    MovingDown --> MovingUp : reverse at bottom
```

## 3. Sequence Diagram (User Journey)
This diagram shows the sequence of interactions when a user calls an elevator and travels to a destination floor.

```mermaid
sequenceDiagram
    actor User
    participant FloorButton
    participant ElevatorSystem
    participant ElevatorCar

    User ->>+ FloorButton: press(UP)
    FloorButton ->>+ ElevatorSystem: dispatchRequest(Request)
    Note over ElevatorSystem: Uses SchedulingStrategy to assign ElevatorCar
    ElevatorSystem ->>+ ElevatorCar: addRequest(Request)
    ElevatorCar -->>- ElevatorSystem: ack
    FloorButton -->>- User: light on

    loop Move to source floor
        ElevatorCar ->> ElevatorCar: move()
    end
    Note over ElevatorCar: Arrives at source, doors open

    User ->>+ ElevatorCar: enter & press floor 5
    Note over ElevatorCar: adds floor 5 to destination list
    ElevatorCar -->>- User: acknowledge
    Note over ElevatorCar: doors close

    loop Move to destination floor
        ElevatorCar ->> ElevatorCar: move()
    end
    Note over ElevatorCar: Arrives at floor 5, doors open

```