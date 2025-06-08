# 🤝 Mediator Design Pattern (JavaScript)

## 🧠 What is Mediator Pattern?

The **Mediator Design Pattern** centralizes complex communications and control logic between related objects to promote **loose coupling**.  
Instead of having objects refer to and communicate with each other directly, they communicate via a **Mediator**.

---

## 🎯 Real-World Analogy

> Think of a **Teacher** in a classroom.  
Students don’t talk to each other directly.  
Instead, they raise their hand and the teacher (Mediator) decides how to respond or relay the message.

---

## 💥 Problem Solved

- Avoids tightly coupled code
- Centralizes control of object interactions
- Makes the system easier to maintain and scale

---

## ❌ Bad Example (Without Mediator)

In this example, UI components talk to each other directly.  
This creates a **spaghetti of dependencies** between classes.

---

## ✅ Good Example (With Mediator)

In this version, all communication is routed through a **central Mediator**.  
This keeps components **independent** of each other and easier to maintain.

---

## 🧪 Run These Files

```bash
node good_example.js
```
