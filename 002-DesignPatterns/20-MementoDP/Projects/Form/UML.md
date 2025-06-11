```mermaid
classDiagram
    class Form {
        -state: dict
        +fill_field(key, value)
        +save(): FormMemento
        +restore(FormMemento)
        +show()
    }

    class FormMemento {
        -state: dict
        +get_state(): dict
    }

    class Caretaker {
        -history: list
        +save(FormMemento)
        +undo(): FormMemento
    }

    Form --> FormMemento : creates
    Caretaker --> FormMemento : stores
    Form --> Caretaker : uses