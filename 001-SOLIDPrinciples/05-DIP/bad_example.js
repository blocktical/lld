// Low-level module
class MySQLDatabase {
    connect() {
      console.log("Connected to MySQL database");
    }
  }
  
  // High-level module depends directly on low-level module
  class UserService {
    constructor() {
      this.database = new MySQLDatabase(); // Tight coupling
    }
  
    getUser() {
      this.database.connect();
      console.log("Getting user data...");
    }
  }
  
  const userService = new UserService();
  userService.getUser();


// PROBLEM
// UserService is tightly coupled to MySQLDatabase. If you want to switch to another database, you must modify UserService.
  