from nodes import NumberNode, BinaryOpNode
from visitors import Evaluator, Printer

# Build AST for (5 + 3) * 2
tree = BinaryOpNode(
    '*',
    BinaryOpNode('+', NumberNode(5), NumberNode(3)),
    NumberNode(2)
)

# Evaluate
evaluator = Evaluator()
result = tree.accept(evaluator)

# Print
printer = Printer()
expression_str = tree.accept(printer)

print("Expression:", expression_str)
print("Result:", result)