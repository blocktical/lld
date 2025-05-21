// bad_example.js — No Abstraction

class EmailService {
    send(to, subject, message) {
      console.log(`Connecting to SMTP server...`);
      console.log(`Authenticating user...`);
      console.log(`Sending email to ${to} with subject "${subject}" and message "${message}"`);
      console.log(`Email sent successfully.`);
    }
  }
  
  // Client has to know too many internal steps — BAD!
  const emailService = new EmailService();
  emailService.send('user@example.com', 'Welcome!', 'Thanks for signing up.');
  