```mermaid
classDiagram
    class Document {
        -state: State
        +proceed()
        +set_state(State)
    }

    class State {
        +handle(document)
    }

    class DraftState
    class SubmittedState
    class ReviewedState
    class ApprovedState
    class PublishedState

    State <|-- DraftState
    State <|-- SubmittedState
    State <|-- ReviewedState
    State <|-- ApprovedState
    State <|-- PublishedState
    Document --> State