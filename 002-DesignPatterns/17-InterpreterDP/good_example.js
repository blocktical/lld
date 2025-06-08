// ✅ GOOD EXAMPLE: Interpreter Pattern

// Step 1: Define the Expression interface
class Expression {
    interpret() {
      throw new Error("This method should be overridden!");
    }
  }
  
  // Step 2: Terminal Expression - Number
  class NumberExpression extends Expression {
    constructor(value) {
      super();
      this.value = parseInt(value);
    }
  
    interpret() {
      return this.value;
    }
  }
  
  // Step 3: Non-Terminal Expression - Addition
  class AddExpression extends Expression {
    constructor(left, right) {
      super();
      this.left = left;
      this.right = right;
    }
  
    interpret() {
      return this.left.interpret() + this.right.interpret();
    }
  }
  
  // Step 4: Helper to build expression tree
  function buildExpressionTree(tokens) {
    let stack = [];
  
    for (let token of tokens) {
      if (!isNaN(token)) {
        stack.push(new NumberExpression(token));
      } else if (token === '+') {
        const right = stack.pop();
        const left = stack.pop();
        const addExpr = new AddExpression(left, right);
        stack.push(addExpr);
      } else {
        throw new Error(`Unsupported operator: ${token}`);
      }
    }
  
    return stack.pop();
  }
  
  // Example: Convert "1 + 2 + 3" to postfix => "1 2 + 3 +"
  const tokens = ["1", "2", "+", "3", "+"];
  const expressionTree = buildExpressionTree(tokens);
  
  console.log(expressionTree.interpret()); // Output: 6
  