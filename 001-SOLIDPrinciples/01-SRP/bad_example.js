// VIOLATION of SRP: One class doing multiple things
class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    // Responsible for user data
    getUserDetails() {
      return `${this.name} (${this.email})`;
    }
  
    // Responsible for saving user to DB
    saveToDatabase() {
      console.log("User saved to database.");
    }
  
    // Responsible for sending email
    sendWelcomeEmail() {
      console.log(`Welcome email sent to ${this.email}`);
    }
  }
  
  