# 🎭 Abstraction

**Abstraction** is the process of hiding implementation details and showing only the relevant functionalities to the user. It helps in reducing complexity and increases reusability and flexibility.

---

## ❌ Bad Example: `bad_example.js`

This code exposes too much internal logic and requires the user to know how it all works. This results in:

- High complexity for users
- Tight coupling between code modules
- Reduced reusability

[View `bad_example.js`](./bad_example.js)

---

## ✅ Good Example: `good_example.js`

In the good version, the internal complexity is abstracted using a high-level interface. This leads to:

- Cleaner APIs for users
- Better modularity and maintainability
- Easier testing and flexibility

[View `good_example.js`](./good_example.js)

---

## ⚠️ Why Abstraction Matters

Without abstraction:
- Users must know how everything works internally
- Difficult to update or change the implementation

With abstraction:
- Focus is on **what** an object does, not **how**
- Simplifies usage and allows internal logic to change independently

---

## 🧠 Real-World Analogy

Think of driving a car:
- You use the steering, brake, and accelerator
- You don’t need to know the internal combustion engine or transmission system

This is **abstraction** — exposing what is necessary, hiding the rest.

---

> "Abstraction is selective ignorance." – Andrew Koenig
