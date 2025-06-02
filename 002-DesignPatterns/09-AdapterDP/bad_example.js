// Legacy payment service
class LegacyPayment {
    sendPayment(amount) {
      console.log(`Paid ₹${amount} using LegacyPayment (sendPayment)`);
    }
  }
  
  // Modern system expects .pay()
  function processPayment(paymentSystem, amount) {
    // Error-prone: assumes .pay() method exists
    paymentSystem.pay(amount);
  }
  
  // Trying to use legacy service directly
  const legacy = new LegacyPayment();
  
  // ❌ This will throw an error because .pay() doesn't exist
  processPayment(legacy, 500);