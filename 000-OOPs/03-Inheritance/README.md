# 🧬 Inheritance

**Inheritance** is a mechanism where one class acquires the properties and behaviors (methods) of another class. It promotes code reusability and establishes a parent-child relationship between classes.

---

## ❌ Bad Example: `bad_example.js`

This example shows code **without inheritance**, which leads to:

- Code duplication
- Reduced maintainability
- Lack of logical hierarchy

[View `bad_example.js`](./bad_example.js)

---

## ✅ Good Example: `good_example.js`

This version uses proper inheritance and class hierarchy:

- Promotes code reuse
- Adds extensibility
- Groups similar behaviors logically

[View `good_example.js`](./good_example.js)

---

## ⚠️ Why Inheritance Matters

Without inheritance:
- You have to rewrite common logic in multiple classes
- Any changes must be made in several places

With inheritance:
- Shared logic lives in a single place (parent class)
- Changes in the parent class automatically apply to children

---

## 🧠 Real-World Analogy

Consider animals:
- All birds can fly and have feathers
- A `Sparrow` and a `Parrot` both **inherit** from the general `Bird` class

This allows us to manage common behavior centrally.

---

> “Inheritance is not about reuse. It’s about establishing relationships.” – Kent Beck
