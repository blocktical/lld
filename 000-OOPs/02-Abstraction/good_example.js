// good_example.js — Uses Abstraction

class EmailService {
    #connect() {
      console.log(`Connecting to SMTP server...`);
    }
  
    #authenticate() {
      console.log(`Authenticating user...`);
    }
  
    #sendMessage(to, subject, message) {
      console.log(`Sending email to ${to} with subject "${subject}" and message "${message}"`);
    }
  
    sendEmail(to, subject, message) {
      this.#connect();
      this.#authenticate();
      this.#sendMessage(to, subject, message);
      console.log(`Email sent successfully.`);
    }
  }
  
  // Client only interacts with the exposed method — GOOD!
  const emailService = new EmailService();
  emailService.sendEmail('user@example.com', 'Welcome!', 'Thanks for signing up.');
  