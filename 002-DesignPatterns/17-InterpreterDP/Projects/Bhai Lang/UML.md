```mermaid
classDiagram
    class Context {
        +Dictionary<String, Any> variables
    }

    class Expression {
        <<interface>>
        +interpret(parts: List<String>): void
    }

    class PrintExpression {
        +interpret(parts: List<String>): void
    }

    class SetExpression {
        +interpret(parts: List<String>): void
    }

    class AddExpression {
        +interpret(parts: List<String>): void
    }

    class BhaiInterpreter {
        +interpretLine(line: String): void
        +run(script: List<String>): void
    }

    Context <.. BhaiInterpreter : uses
    Expression <|-- PrintExpression
    Expression <|-- SetExpression
    Expression <|-- AddExpression
    BhaiInterpreter --> Expression : uses polymorphically
