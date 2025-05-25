// ✅ Good Example: Using Decorator Pattern

// Base interface
class Coffee {
    getCost() {
      return 5;
    }
  
    getDescription() {
      return "Plain Coffee";
    }
  }
  
  // Decorator Base
  class CoffeeDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    getCost() {
      return this.coffee.getCost();
    }
  
    getDescription() {
      return this.coffee.getDescription();
    }
  }
  
  // Milk Decorator
  class MilkDecorator extends CoffeeDecorator {
    getCost() {
      return super.getCost() + 2;
    }
  
    getDescription() {
      return super.getDescription() + " + Milk";
    }
  }
  
  // Sugar Decorator
  class SugarDecorator extends CoffeeDecorator {
    getCost() {
      return super.getCost() + 1.5;
    }
  
    getDescription() {
      return super.getDescription() + " + Sugar";
    }
  }
  
  // Usage
  let coffee = new Coffee();
  console.log(`${coffee.getDescription()}: $${coffee.getCost()}`);
  
  coffee = new MilkDecorator(coffee);
  console.log(`${coffee.getDescription()}: $${coffee.getCost()}`);
  
  coffee = new SugarDecorator(coffee);
  console.log(`${coffee.getDescription()}: $${coffee.getCost()}`);