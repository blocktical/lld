// ❌ BAD EXAMPLE: Using if-else (not scalable)

function pay(amount, method) {
    if (method === "upi") {
        console.log(`Paying ₹${amount} using UPI...`);
        // logic for UPI
    } else if (method === "credit_card") {
        console.log(`Paying ₹${amount} using Credit Card...`);
        // logic for Credit Card
    } else if (method === "net_banking") {
        console.log(`Paying ₹${amount} using Net Banking...`);
        // logic for Net Banking
    } else {
        console.log("Payment method not supported.");
    }
}

// Usage
pay(500, "upi");
pay(1000, "credit_card");


// 🧨 Problems:
// Too many if-else blocks.
// Hard to add/remove new methods.
// Breaks Open/Closed Principle.
// Logic is mixed (violation of SRP - Single Responsibility).
