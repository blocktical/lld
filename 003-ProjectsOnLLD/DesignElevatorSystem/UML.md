# UML Diagrams for Elevator System

This file contains the Mermaid diagrams for the Class, State, and Sequence flows.

## 1. Class Diagram

This diagram shows the classes, their attributes, methods, and the relationships between them (inheritance, aggregation, composition).

```mermaid
classDiagram
    direction "Direction" {
        <<Enumeration>>
        UP
        DOWN
        IDLE
    }

    class ElevatorSystem {
        <<Singleton>>
        -List~ElevatorCar~ elevators
        -SchedulingStrategy schedulingStrategy
        +getInstance() : ElevatorSystem
        +dispatchRequest(Request)
    }

    class ElevatorCar {
        -int id
        -int currentFloor
        -ElevatorState state
        -Direction direction
        -Set~int~ destinationFloors
        +run()
        +move()
        +setState(ElevatorState)
    }

    class Request {
        -int sourceFloor
        -int destinationFloor
        -Direction direction
    }

    class ElevatorState {
        <<Interface>>
        +handleRequest(ElevatorCar, Request)
        +updateState(ElevatorCar)
    }

    class IdleState {
        +handleRequest(ElevatorCar, Request)
        +updateState(ElevatorCar)
    }
    class MovingUpState {
        +handleRequest(ElevatorCar, Request)
        +updateState(ElevatorCar)
    }
    class MovingDownState {
        +handleRequest(ElevatorCar, Request)
        +updateState(ElevatorCar)
    }

    class SchedulingStrategy {
        <<Interface>>
        +scheduleElevator(List~ElevatorCar~, Request) : ElevatorCar
    }
    class NearestCarStrategy {
        +scheduleElevator(List~ElevatorCar~, Request) : ElevatorCar
    }

    ElevatorSystem "1" *-- "many" ElevatorCar : manages
    ElevatorSystem o-- "1" SchedulingStrategy : uses
    ElevatorSystem ..> Request : processes

    ElevatorCar "1" *-- "1" ElevatorState : has a
    ElevatorCar ..> direction

    ElevatorState <|.. IdleState
    ElevatorState <|.. MovingUpState
    ElevatorState <|.. MovingDownState

    SchedulingStrategy <|.. NearestCarStrategy
```

## 2. State Diagram
This diagram illustrates the possible states of an ElevatorCar and the transitions between them.
```mermaid
stateDiagram-v2
    [*] --> Idle

    Idle --> MovingUp : request above
    Idle --> MovingDown : request below

    MovingUp --> Idle : no more requests
    MovingUp --> MovingUp : stop at floor & continue up
    MovingUp --> MovingDown : reaches top of requests & reverses

    MovingDown --> Idle : no more requests
    MovingDown --> MovingDown : stop at floor & continue down
    MovingDown --> MovingUp : reaches bottom of requests & reverses

    state "Moving" as Moving {
        state "MovingUp" as Up
        state "MovingDown" as Down
    }
```

## 3. Sequence Diagram (User Journey)
This diagram shows the sequence of interactions when a user calls an elevator and travels to a destination floor.
```mermaid
sequenceDiagram
    actor User
    participant FloorButton
    participant ElevatorSystem
    participant ElevatorCar

    User->>+FloorButton: press(UP)
    FloorButton->>+ElevatorSystem: dispatchRequest(Request)
    Note over ElevatorSystem: Use SchedulingStrategy to find best car
    ElevatorSystem->>+ElevatorCar: addRequest(Request)
    ElevatorCar-->>-ElevatorSystem:
    FloorButton-->>-User: Light On

    loop Elevator Moves to Source Floor
        ElevatorCar->>ElevatorCar: move()
    end
    Note over ElevatorCar: Arrives at source floor, Doors Open

    User->>+ElevatorCar: Enters and presses floor 5
    Note over ElevatorCar: Creates internal request for floor 5
    ElevatorCar-->>-User:
    Note over ElevatorCar: Doors Close

    loop Elevator Moves to Destination Floor
        ElevatorCar->>ElevatorCar: move()
    end
    Note over ElevatorCar: Arrives at destination, Doors Open
```