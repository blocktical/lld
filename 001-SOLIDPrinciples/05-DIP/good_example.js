// Abstraction (interface) for database operations
class Database {
    connect() {
      throw new Error("Method 'connect()' must be implemented.");
    }
  }
  
  // Low-level module implements abstraction
  class MySQLDatabase extends Database {
    connect() {
      console.log("Connected to MySQL database");
    }
  }
  
  class MongoDatabase extends Database {
    connect() {
      console.log("Connected to MongoDB database");
    }
  }
  
  // High-level module depends on abstraction, not on low-level details
  class UserService {
    constructor(database) {
      this.database = database;  // Dependency Injection
    }
  
    getUser() {
      this.database.connect();
      console.log("Getting user data...");
    }
  }
  
  // Usage with MySQL
  const mySQLDb = new MySQLDatabase();
  const userService1 = new UserService(mySQLDb);
  userService1.getUser();
  
  // Usage with MongoDB
  const mongoDb = new MongoDatabase();
  const userService2 = new UserService(mongoDb);
  userService2.getUser();
  