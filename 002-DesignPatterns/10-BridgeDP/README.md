# 🌉 Bridge Design Pattern (JavaScript Version)

## 📖 What is Bridge Pattern?

Bridge Pattern helps us **separate abstraction from implementation** so both can vary independently. This makes code flexible, scalable, and easier to maintain.

---

## 💡 Real-Life Analogy:
TV remote and TV are two different components:
- Remote is the **abstraction** (interface).
- TV is the **implementation** (Sony, LG, etc.).

You can use the same remote logic to control any brand of TV using the **bridge**.

---

## 🔍 Use Case:
You are building a notification system where:
- **Notification type** is the abstraction (like EmailNotification, SMSNotification)
- **MessageSender** is the implementation (like GmailSender, TwilioSender)

Using Bridge Pattern:
- You can add new notification types or senders independently.

---

## ❌ Bad Example (Tightly Coupled)
Each notification has hardcoded message sending logic.

## ✅ Good Example (Bridge Pattern)
Notification and message sending logic are decoupled.

---

## 🎯 Benefits
- Clean separation of concerns
- Easy to extend abstraction and implementation separately
- Avoids class explosion

---

## 🚀 Run Instructions
Use Node.js:

```bash
node good_example.js
```