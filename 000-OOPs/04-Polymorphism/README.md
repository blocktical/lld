# 🌀 Polymorphism

**Polymorphism** means "many forms." It allows objects of different types to be treated as objects of a common super type. It enables a single interface to represent different underlying forms (data types or behaviors).

---

## ❌ Bad Example: `bad_example.js`

This code does not use polymorphism properly, which leads to:

- Use of multiple `if-else` or `switch` statements
- Violation of Open-Closed Principle
- Reduced flexibility and scalability

[View `bad_example.js`](./bad_example.js)

---

## ✅ Good Example: `good_example.js`

Here, polymorphism is implemented using method overriding:

- Code is clean and scalable
- No need for conditional logic
- Open for extension, closed for modification

[View `good_example.js`](./good_example.js)

---

## ⚠️ Why Polymorphism Matters

Without polymorphism:
- Every new type requires editing existing logic (e.g., `if/else` chains)

With polymorphism:
- Add new types without touching existing code
- Behavior is determined at runtime based on object

---

## 🧠 Real-World Analogy

Imagine a universal **Remote Control**:
- It can operate a TV, AC, or Music Player
- Each device has a `turnOn()` function, but implementation differs

That’s **polymorphism** — same interface, different behaviors.

---

> "Polymorphism adds flexibility to your code and promotes good design practices."
