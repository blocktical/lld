// Separate interfaces for work and eat behaviors
class Workable {
    work() {
      throw new Error("Not implemented");
    }
  }
  
  class Eatable {
    eat() {
      throw new Error("Not implemented");
    }
  }
  
  // Human implements both work and eat behaviors
  class HumanWorker extends Workable {
    work() {
      console.log("Human working");
    }
  }
  
  Object.assign(HumanWorker.prototype, Eatable.prototype);
  HumanWorker.prototype.eat = function() {
    console.log("Human eating");
  }
  
  // Robot implements only work behavior
  class RobotWorker extends Workable {
    work() {
      console.log("Robot working");
    }
  }
  
  // Usage
  const human = new HumanWorker();
  human.work(); // Human working
  human.eat();  // Human eating
  
  const robot = new RobotWorker();
  robot.work(); // Robot working
  // robot.eat() --> Not implemented, and robot doesn't need to implement it
  