// ✅ GOOD EXAMPLE: Using Strategy Design Pattern

// Step 1: Define Strategies

class UpiPayment {
    pay(amount) {
        console.log(`Paying ₹${amount} using UPI...`);
    }
}

class CreditCardPayment {
    pay(amount) {
        console.log(`Paying ₹${amount} using Credit Card...`);
    }
}

class NetBankingPayment {
    pay(amount) {
        console.log(`Paying ₹${amount} using Net Banking...`);
    }
}

// Step 2: Payment Context that uses a strategy

class PaymentContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    pay(amount) {
        this.strategy.pay(amount);
    }
}

// Usage:

const upi = new UpiPayment();
const card = new CreditCardPayment();
const netBanking = new NetBankingPayment();

const payment = new PaymentContext(upi);
payment.pay(500); // Using UPI

payment.setStrategy(card);
payment.pay(1000); // Using Credit Card

payment.setStrategy(netBanking);
payment.pay(2000); // Using Net Banking



// 🔁 Benefits of Strategy Pattern:
// Feature	            If-Else Code	     Strategy Pattern
// Easy to Extend	    ❌ No	            ✅ Yes
// Clean Code	        ❌ No	            ✅ Yes
// Reusable	            ❌ No	            ✅ Yes
// Easy Testing	        ❌ Difficult	        ✅ Very Easy