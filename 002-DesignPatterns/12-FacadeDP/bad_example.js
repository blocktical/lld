class DVDPlayer {
    on() {
      console.log("DVD Player ON");
    }
    play(movie) {
      console.log(`Playing movie: ${movie}`);
    }
  }
  
  class Projector {
    turnOn() {
      console.log("Projector ON");
    }
  }
  
  class SoundSystem {
    setMode(mode) {
      console.log(`Sound mode set to ${mode}`);
    }
  }
  
  class Lights {
    dim() {
      console.log("Lights dimmed");
    }
  }
  
  // Client directly manages all subsystems
  const dvd = new DVDPlayer();
  const projector = new Projector();
  const sound = new SoundSystem();
  const lights = new Lights();
  
  dvd.on();
  projector.turnOn();
  sound.setMode("Surround");
  lights.dim();
  dvd.play("Inception");