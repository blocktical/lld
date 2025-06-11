from abc import ABC, abstractmethod

class ASTVisitor(ABC):
    @abstractmethod
    def visit_number(self, node): pass

    @abstractmethod
    def visit_binary_op(self, node): pass


# 1️⃣ Concrete Visitor – Evaluate the expression
class Evaluator(ASTVisitor):
    def visit_number(self, node):
        return node.value

    def visit_binary_op(self, node):
        left = node.left.accept(self)
        right = node.right.accept(self)
        if node.operator == '+':
            return left + right
        elif node.operator == '*':
            return left * right
        else:
            raise Exception(f"Unsupported operator: {node.operator}")


# 2️⃣ Concrete Visitor – Print the expression
class Printer(ASTVisitor):
    def visit_number(self, node):
        return str(node.value)

    def visit_binary_op(self, node):
        left = node.left.accept(self)
        right = node.right.accept(self)
        return f"({left} {node.operator} {right})"