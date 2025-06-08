// ❌ BAD EXAMPLE: No interpreter pattern, just plain string eval
function evaluateExpression(expr) {
    const tokens = expr.split(' ');
    let result = 0;
  
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (!isNaN(token)) {
        result += parseInt(token);
      } else if (token !== '+') {
        throw new Error(`Unsupported operator: ${token}`);
      }
    }
  
    return result;
  }
  
  // Only supports addition, can't scale to -, *, / or parenthesis
  console.log(evaluateExpression("1 + 2 + 3"));