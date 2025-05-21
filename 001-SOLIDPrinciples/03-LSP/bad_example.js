class Bird {
    fly() {
      console.log("Flying");
    }
  }
  
  class Sparrow extends Bird {
    // Sparrow can fly
  }
  
  class Ostrich extends Bird {
    // Ostrich cannot fly, but inherits fly()
    fly() {
      throw new Error("Ostrich can't fly!");
    }
  }
  
  function makeBirdFly(bird) {
    bird.fly();
  }
  
  const sparrow = new Sparrow();
  const ostrich = new Ostrich();
  
  makeBirdFly(sparrow);   // Works fine
  
  makeBirdFly(ostrich);   // Throws error — violates LSP

// PROBLEM
// Because Ostrich is a Bird subclass but cannot behave like a Bird (it cannot fly). So substituting a Bird with an Ostrich breaks the expected behavior.