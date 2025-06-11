# 🧠 Visitor Design Pattern – AST Traversal in Python

## 🔍 What This Project Does

Implements the Visitor Design Pattern to:
- Traverse an abstract syntax tree (AST)
- Perform operations like evaluation and printing

## 🧱 Key Components

- `ASTNode`: Base class for all expression nodes
- `NumberNode`, `BinaryOpNode`: Expression nodes
- `Evaluator`, `Printer`: Concrete visitors

## 🛠️ How it works

```python
Expression = ((5 + 3) * 2)

AST:
         (*)
        /   \
      (+)     2
     /   \
    5     3