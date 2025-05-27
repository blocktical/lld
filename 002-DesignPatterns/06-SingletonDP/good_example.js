class Logger {
    constructor() {
      if (Logger.instance) {
        return Logger.instance; // return existing
      }
      console.log("Creating new logger instance...");
      this.logs = [];
      Logger.instance = this;
    }
  
    log(message) {
      this.logs.push(message);
      console.log(`[Logger] ${message}`);
    }
  
    get count() {
      return this.logs.length;
    }
  }
  
  // Every part of app gets the same instance 🧠
  const logger1 = new Logger();
  const logger2 = new Logger();
  
  logger1.log("Log from Logger 1");
  logger2.log("Log from Logger 2");
  
  console.log("Total logs:", logger1.count); 