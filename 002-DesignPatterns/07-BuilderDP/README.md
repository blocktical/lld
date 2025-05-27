# 🧱 Builder Design Pattern (JavaScript)

## 🤔 What is Builder Pattern?

Builder Pattern is used when you want to construct a **complex object step by step** without writing a long constructor.

### Real-Life Example:
Creating a custom `Laptop` where user selects:
- Processor
- RAM
- Storage
- Graphics Card
- OS

Instead of passing all this in constructor, we **build** it step-by-step.

---

## ❌ Problem Without Builder:
- Long constructors with 5–6 parameters
- Difficult to remember order of arguments
- Hard to read and maintain

## ✅ Solution With Builder:
- Build object in **chainable, readable format**
- Each step is optional
- Final `.build()` returns complete object

---

## 🏃 Run the Code
```bash
node good_example.js
```