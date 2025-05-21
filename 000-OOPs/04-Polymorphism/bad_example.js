// bad_example.js — No Polymorphism, Conditional Logic

function turnOn(device) {
    if (device === 'TV') {
      console.log("Turning on the TV...");
    } else if (device === 'AC') {
      console.log("Turning on the Air Conditioner...");
    } else if (device === 'Speaker') {
      console.log("Turning on the Speaker...");
    } else {
      console.log("Unknown device");
    }
  }
  
  // Problem: For every new device, we have to modify this function — BAD!
  turnOn('TV');
  turnOn('AC');
  