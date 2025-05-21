# 🔐 Encapsulation

**Encapsulation** is the process of hiding the internal state of an object and requiring all interaction to be performed through an object’s methods. It protects the internal data and ensures better control and modularity.

---

## ❌ Bad Example: `bad_example.js`

This file demonstrates a class with **direct access to internal data**. It leads to:

- Data inconsistency
- Lack of validation
- Tight coupling
- Breaks the "data-hiding" principle

[View `bad_example.js`](./bad_example.js)

---

## ✅ Good Example: `good_example.js`

This example shows a class where:

- Data members are private
- Access is through getter and setter methods
- Validation logic is applied within methods
- Class ensures **data integrity and maintainability**

[View `good_example.js`](./good_example.js)

---

## ⚠️ Why Encapsulation Matters

Without encapsulation:
- Anyone can manipulate internal data directly (e.g., setting negative age)
- No control over how data is set or retrieved
- More bugs and harder maintenance

With proper encapsulation:
- Improves code **modularity**
- Protects object integrity
- Supports cleaner, extensible designs for real systems

---

## 🧠 Real-World Analogy

Think of an ATM machine:
- You can't access the cash box directly
- You interact via buttons and screen
- The system validates and processes your input behind the scenes

This is **encapsulation** in action.

---

> “Encapsulation is about making sure that objects guard their secrets well.” – Grady Booch
