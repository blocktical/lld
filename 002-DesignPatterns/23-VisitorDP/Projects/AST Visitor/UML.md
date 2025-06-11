```mermaid
classDiagram
    class ASTNode {
        <<abstract>>
        +accept(visitor)
    }

    class NumberNode {
        +value
        +accept(visitor)
    }

    class BinaryOpNode {
        +operator
        +left
        +right
        +accept(visitor)
    }

    class ASTVisitor {
        <<interface>>
        +visit_number(node)
        +visit_binary_op(node)
    }

    class Evaluator {
        +visit_number(node)
        +visit_binary_op(node)
    }

    class Printer {
        +visit_number(node)
        +visit_binary_op(node)
    }

    ASTNode <|-- NumberNode
    ASTNode <|-- BinaryOpNode
    ASTVisitor <|-- Evaluator
    ASTVisitor <|-- Printer
    NumberNode --> ASTVisitor : accepts
    BinaryOpNode --> ASTVisitor : accepts