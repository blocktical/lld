class Coffee {
    getCost() {
      return 5;
    }
  
    getDescription() {
      return "Plain Coffee";
    }
  }
  
  // Hardcoded variations
  class MilkCoffee extends Coffee {
    getCost() {
      return super.getCost() + 2;
    }
  
    getDescription() {
      return super.getDescription() + " with Milk";
    }
  }
  
  class MilkSugarCoffee extends MilkCoffee {
    getCost() {
      return super.getCost() + 1.5;
    }
  
    getDescription() {
      return super.getDescription() + " and Sugar";
    }
  }
  
  const c1 = new Coffee();
  console.log(`${c1.getDescription()}: $${c1.getCost()}`);
  
  const c2 = new MilkCoffee();
  console.log(`${c2.getDescription()}: $${c2.getCost()}`);
  
  const c3 = new MilkSugarCoffee();
  console.log(`${c3.getDescription()}: $${c3.getCost()}`);