from abc import ABC, abstractmethod

# Base Node
class ASTNode(ABC):
    @abstractmethod
    def accept(self, visitor):
        pass

# Literal node (e.g., numbers)
class NumberNode(ASTNode):
    def __init__(self, value):
        self.value = value

    def accept(self, visitor):
        return visitor.visit_number(self)

# Binary operation node (e.g., +, *, etc.)
class BinaryOpNode(ASTNode):
    def __init__(self, operator, left: ASTNode, right: ASTNode):
        self.operator = operator
        self.left = left
        self.right = right

    def accept(self, visitor):
        return visitor.visit_binary_op(self)