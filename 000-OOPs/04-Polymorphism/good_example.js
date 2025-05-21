// good_example.js — Polymorphism via Method Overriding

class Device {
    turnOn() {
      console.log("Turning on device...");
    }
  }
  
  class TV extends Device {
    turnOn() {
      console.log("Turning on the TV...");
    }
  }
  
  class AC extends Device {
    turnOn() {
      console.log("Turning on the Air Conditioner...");
    }
  }
  
  class Speaker extends Device {
    turnOn() {
      console.log("Turning on the Speaker...");
    }
  }
  
  // Polymorphic behavior
  function activateDevice(device) {
    device.turnOn();
  }
  
  const tv = new TV();
  const ac = new AC();
  const speaker = new Speaker();
  
  activateDevice(tv);
  activateDevice(ac);
  activateDevice(speaker);
  