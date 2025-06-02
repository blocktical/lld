# 🔌 Adapter Design Pattern (JavaScript Version)

## 📖 What is Adapter Pattern?

Adapter Pattern is used to **connect two incompatible interfaces** so they can work together without modifying existing code.

It acts like a **bridge** between the old system and new requirements.

---

## 🧠 Real-Life Example:
Suppose your laptop has a **USB-A port**, but your charger is **USB-C**. You use a **USB-C to USB-A Adapter** — without changing the laptop or the charger.

---

## 💼 Problem Scenario:
- You have a system that expects all payment services to have a `.pay(amount)` method.
- But a legacy service provides a `.sendPayment(amount)` method.

Instead of modifying the legacy class (which might be risky), we use an **Adapter** to make it compatible.

---

## ❌ Bad Example (No Adapter)
Your code directly uses incompatible methods and breaks consistency.

## ✅ Good Example (With Adapter)
You wrap the legacy method inside an adapter and make it compatible with expected interface.

---

## 🎯 Benefits
- Plug old systems into new ones without changing them
- Makes code cleaner, testable, and scalable

---

## 🚀 Run Instructions
Use Node.js to run the examples:

```bash
node good_example.js
```