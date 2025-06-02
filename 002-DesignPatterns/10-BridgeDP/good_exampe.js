
// Sender (Implementation)
class MessageSender {
    sendMessage(message) {
      throw new Error("sendMessage() must be implemented");
    }
  }
  
  class GmailSender extends MessageSender {
    sendMessage(message) {
      console.log(`📧 Sent via Gmail: ${message}`);
    }
  }
  
  class TwilioSender extends MessageSender {
    sendMessage(message) {
      console.log(`📲 Sent via Twilio SMS: ${message}`);
    }
  }
  
  // Notification (Abstraction)
  class Notification {
    constructor(sender) {
      this.sender = sender;
    }
  
    notify(message) {
      throw new Error("notify() must be implemented");
    }
  }
  
  class EmailNotification extends Notification {
    notify(message) {
      this.sender.sendMessage(`[EMAIL] ${message}`);
    }
  }
  
  class SMSNotification extends Notification {
    notify(message) {
      this.sender.sendMessage(`[SMS] ${message}`);
    }
  }
  
  // Usage
  const gmailSender = new GmailSender();
  const emailNotification = new EmailNotification(gmailSender);
  emailNotification.notify("Welcome to Bridge Pattern!");
  
  const twilioSender = new TwilioSender();
  const smsNotification = new SMSNotification(twilioSender);
  smsNotification.notify("Your OTP is 456123.");