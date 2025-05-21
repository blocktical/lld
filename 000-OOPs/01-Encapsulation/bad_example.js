// bad_example.js — Violates Encapsulation

class BankAccount {
    constructor(owner, balance) {
      this.owner = owner;
      this.balance = balance;
    }
  }
  
  const account = new BankAccount('Alice', 1000);
  
  // Directly modifying internal data — BAD!
  account.balance = -500;  // ❌ invalid state
  console.log(`${account.owner} has balance: ${account.balance}`);
  