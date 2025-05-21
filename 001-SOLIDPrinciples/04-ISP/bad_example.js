// A big interface with multiple unrelated methods
class Worker {
    work() {
      throw new Error("Not implemented");
    }
    
    eat() {
      throw new Error("Not implemented");
    }
  }
  
  class HumanWorker extends Worker {
    work() {
      console.log("Human working");
    }
    
    eat() {
      console.log("Human eating");
    }
  }
  
  class RobotWorker extends Worker {
    work() {
      console.log("Robot working");
    }
    
    eat() {
      // Robot doesn't eat, but forced to implement this method
      throw new Error("Robots don't eat!");
    }
  }

// PROBLEM
// Because RobotWorker is forced to implement eat() even though it doesn’t need it. This violates ISP.