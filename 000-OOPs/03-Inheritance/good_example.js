// good_example.js — Proper Use of Inheritance

class Vehicle {
    startEngine() {
      console.log("Starting engine...");
    }
  
    stopEngine() {
      console.log("Stopping engine...");
    }
  }
  
  class Car extends Vehicle {
    drive() {
      console.log("Driving the car...");
    }
  }
  
  class Bike extends Vehicle {
    drive() {
      console.log("Riding the bike...");
    }
  }
  
  const myCar = new Car();
  myCar.startEngine();
  myCar.drive();
  myCar.stopEngine();
  
  const myBike = new Bike();
  myBike.startEngine();
  myBike.drive();
  myBike.stopEngine();
  