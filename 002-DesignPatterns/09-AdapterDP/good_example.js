// Modern payment interface
class ModernPayment {
    pay(amount) {
      console.log(`Paid ₹${amount} using ModernPayment`);
    }
  }
  
  // Legacy payment system with different method
  class LegacyPayment {
    sendPayment(amount) {
      console.log(`Paid ₹${amount} using LegacyPayment`);
    }
  }
  
  // ✅ Adapter that bridges LegacyPayment to expected .pay()
  class LegacyPaymentAdapter {
    constructor(legacyPayment) {
      this.legacyPayment = legacyPayment;
    }
  
    pay(amount) {
      this.legacyPayment.sendPayment(amount);
    }
  }
  
  // Common function for payment
  function processPayment(paymentSystem, amount) {
    paymentSystem.pay(amount);
  }
  
  // ✅ Using modern system
  const modern = new ModernPayment();
  processPayment(modern, 500);
  
  // ✅ Using legacy system via adapter
  const legacy = new LegacyPayment();
  const adaptedLegacy = new LegacyPaymentAdapter(legacy);
  processPayment(adaptedLegacy, 500);