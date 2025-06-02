// Hardcoded logic inside each class - tightly coupled

class EmailNotification {
    send(message) {
      console.log(`Sending EMAIL: ${message}`);
    }
  }
  
  class SMSNotification {
    send(message) {
      console.log(`Sending SMS: ${message}`);
    }
  }
  
  // If you want to send via WhatsApp or Push — create new classes again with copy-paste
  const email = new EmailNotification();
  email.send("Hello from ExamsBox!");
  
  const sms = new SMSNotification();
  sms.send("OTP: 123456");