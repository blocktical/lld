// Base class with common behavior
class Bird {
    move() {
      console.log("Moving");
    }
  }
  
  class FlyingBird extends Bird {
    fly() {
      console.log("Flying");
    }
  }
  
  class Sparrow extends FlyingBird {
    // Sparrow can fly, so inherits fly()
  }
  
  class Ostrich extends Bird {
    // Ostrich can move but cannot fly
  }
  
  function makeBirdMove(bird) {
    bird.move();
  }
  
  function makeBirdFly(bird) {
    if (bird.fly) {
      bird.fly();
    } else {
      console.log("This bird cannot fly.");
    }
  }
  
  const sparrow = new Sparrow();
  const ostrich = new Ostrich();
  
  makeBirdMove(sparrow);   // Moving
  makeBirdFly(sparrow);    // Flying
  
  makeBirdMove(ostrich);   // Moving
  makeBirdFly(ostrich);    // This bird cannot fly.
  