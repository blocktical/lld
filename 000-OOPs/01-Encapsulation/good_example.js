// good_example.js — Follows Encapsulation

class BankAccount {
    #balance; // private field
  
    constructor(owner, initialBalance) {
      this.owner = owner;
      this.#balance = initialBalance > 0 ? initialBalance : 0;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const account = new BankAccount('Alice', 1000);
  account.withdraw(1500);  // ❌ won't allow
  account.deposit(500);
  
  console.log(`${account.owner} has balance: ${account.getBalance()}`); // ✅ 1500
  