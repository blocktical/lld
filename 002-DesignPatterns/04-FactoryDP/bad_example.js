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
  
  // ❌ Bad: Client has to know which sender to use
  function sendNotification(type, message) {
    if (type === 'email') {
      const sender = new EmailSender();
      sender.send(message);
    } else if (type === 'sms') {
      const sender = new SMSSender();
      sender.send(message);
    } else if (type === 'push') {
      const sender = new PushSender();
      sender.send(message);
    } else {
      console.log('Invalid notification type');
    }
  }
  
  // Using it
  sendNotification('email', 'Welcome User!');
  sendNotification('sms', 'Your OTP is 1234');
  