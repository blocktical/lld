// Product classes
class EmailSender {
    send(message) {
      console.log(`📧 Sending Email: ${message}`);
    }
  }
  
  class SMSSender {
    send(message) {
      console.log(`📲 Sending SMS: ${message}`);
    }
  }
  
  class PushSender {
    send(message) {
      console.log(`📥 Sending Push Notification: ${message}`);
    }
  }
  
  // 🏭 Factory
  class NotificationFactory {
    static createSender(type) {
      switch (type) {
        case 'email':
          return new EmailSender();
        case 'sms':
          return new SMSSender();
        case 'push':
          return new PushSender();
        default:
          throw new Error('Unknown notification type');
      }
    }
  }
  
  // ✅ Client code (doesn't care about the actual class)
  function sendNotification(type, message) {
    try {
      const sender = NotificationFactory.createSender(type);
      sender.send(message);
    } catch (e) {
      console.error(e.message);
    }
  }
  
  // Using it
  sendNotification('email', 'Welcome User!');
  sendNotification('sms', 'Your OTP is 1234');
  sendNotification('push', 'New alert!');
  