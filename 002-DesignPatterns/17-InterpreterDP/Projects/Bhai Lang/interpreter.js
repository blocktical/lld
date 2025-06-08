// Memory to store variables
const context = {};

class Expression {
  interpret(line) {
    throw new Error("implement in subclass");
  }
}

// Print Statement: bhai bol "Hello" OR bhai bol x
class PrintExpression extends Expression {
  interpret(parts) {
    const toPrint = parts.slice(2).join(' ').replace(/"/g, '');
    console.log(context[toPrint] ?? toPrint);
  }
}

// Assignment: bhai set x = 5
class SetExpression extends Expression {
  interpret(parts) {
    const varName = parts[2];
    const value = parseInt(parts[4]);
    context[varName] = value;
  }
}

// Add Statement: bhai add x 5
class AddExpression extends Expression {
  interpret(parts) {
    const varName = parts[2];
    const value = parseInt(parts[3]);
    if (context[varName] !== undefined) {
      context[varName] += value;
    } else {
      console.error(`Variable ${varName} not defined.`);
    }
  }
}

// Interpreter logic
function interpretLine(line) {
  const parts = line.trim().split(' ');
  if (parts[0] !== 'bhai') return;

  switch (parts[1]) {
    case 'bol':
      new PrintExpression().interpret(parts);
      break;
    case 'set':
      new SetExpression().interpret(parts);
      break;
    case 'add':
      new AddExpression().interpret(parts);
      break;
    default:
      console.error(`Unknown command: ${parts[1]}`);
  }
}

// Read file and interpret each line
const fs = require('fs');
const lines = fs.readFileSync('bhai_script.txt', 'utf-8').split('\n');
lines.forEach(interpretLine);
