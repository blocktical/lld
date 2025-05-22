# 🧠 Strategy Design Pattern 

## 💡 What is Strategy Pattern?

Strategy Pattern is a **behavioral design pattern** that allows you to define a family of algorithms (or ways to do something), put each of them in separate classes (or objects), and make them interchangeable based on need.

### 🤷 Why Use It?

- Reduces `if-else` or `switch-case` hell
- Makes code **clean, extensible, and testable**
- Helps in following **Open/Closed Principle** (Open for extension, closed for modification)

---

## ❌ bad_example.js

- Uses `if-else` to handle different payment methods.
- Adding a new payment method means editing the main function.
- Not flexible, not scalable.

## ✅ good_example.js

- Follows Strategy Pattern.
- Each payment strategy is separate.
- Easily pluggable and replaceable at runtime.
- Adding new methods is easy without changing old code.

---

## 🛍 Use Case: Online Payment System

User can pay using:
- UPI
- Credit Card
- Net Banking

We’ll show how the bad approach looks and how Strategy Pattern fixes it.

---

Happy Designing! ✨  
*— Blocktical by Examsbox -*