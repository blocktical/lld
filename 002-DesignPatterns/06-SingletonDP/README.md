# 🔁 Singleton Design Pattern (JavaScript Example)

The Singleton Pattern ensures that a class has only **one instance** and provides a global point of access to it.

## 🤔 Real-World Example
Imagine you have a `Logger` class used in multiple files. You don’t want to create a new logger each time — you want a **single shared logger** throughout the app.

## ❌ Bad Example (Creates multiple instances)
- Multiple objects created
- Wastes memory
- Not consistent behavior

## ✅ Good Example (Singleton)
- Ensures one shared instance
- Saves memory
- Global config/logger/db manager

---

## 🏗️ How to Run

1. Run both files one by one:

```bash
node good_example.js
```
