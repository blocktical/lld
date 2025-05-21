// CORRECT SRP Implementation:
  
  // 1. Class only for holding user data
  class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    getUserDetails() {
      return `${this.name} (${this.email})`;
    }
  }
  
  // 2. Responsible for data persistence
  class UserRepository {
    save(user) {
      // Logic to save user
      console.log(`User ${user.name} saved to DB.`);
    }
  }
  
  // 3. Responsible for communication/email
  class EmailService {
    sendWelcomeEmail(user) {
      // Logic to send email
      console.log(`Welcome email sent to ${user.email}`);
    }
  }
  
  // ✅ Usage
  const user = new User("Aman", "aman@example.com");
  const repo = new UserRepository();
  const mailer = new EmailService();
  
  repo.save(user);             // Only handles saving
  mailer.sendWelcomeEmail(user);  // Only handles emailing
  