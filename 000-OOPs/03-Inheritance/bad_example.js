// bad_example.js — No Inheritance, Redundant Code

class Car {
    startEngine() {
      console.log("Starting car engine...");
    }
  
    stopEngine() {
      console.log("Stopping car engine...");
    }
  
    drive() {
      console.log("Driving the car...");
    }
  }
  
  class Bike {
    startEngine() {
      console.log("Starting bike engine...");
    }
  
    stopEngine() {
      console.log("Stopping bike engine...");
    }
  
    drive() {
      console.log("Riding the bike...");
    }
  }
  
  // Redundant methods in both classes — BAD!
  