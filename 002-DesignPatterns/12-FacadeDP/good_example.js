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
  
  // FACADE
  class HomeTheaterFacade {
    constructor() {
      this.dvd = new DVDPlayer();
      this.projector = new Projector();
      this.sound = new SoundSystem();
      this.lights = new Lights();
    }
  
    watchMovie(movie) {
      console.log("\n🎬 Setting up your movie night...");
      this.dvd.on();
      this.projector.turnOn();
      this.sound.setMode("Surround");
      this.lights.dim();
      this.dvd.play(movie);
    }
  }
  
  // Client
  const homeTheater = new HomeTheaterFacade();
  homeTheater.watchMovie("Inception");