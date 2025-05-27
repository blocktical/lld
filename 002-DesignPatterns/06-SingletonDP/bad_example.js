class Logger {
    constructor(name) {
      console.log("Creating a new logger...");
      this.name = name;
    }
  
    log(message) {
      console.log(`[${this.name}] ${message}`);
    }
  }
  
  // Each part of the app creates a new Logger 😬
  const logger1 = new Logger("Logger 1");
  const logger2 = new Logger("Logger 2");
  
  logger1.log("Log from Logger 1");
  logger2.log("Log from Logger 2");