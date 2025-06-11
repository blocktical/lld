# 🧠 Template Method Design Pattern

## 🧾 Definition

Template Method is a behavioral design pattern that defines the **skeleton of an algorithm** in a base class and allows subclasses to redefine specific steps.

---

## 📦 Real-World Use Case: Online Exam System

Steps:
1. Login
2. Read Instructions
3. **Solve Questions** (customizable)
4. Submit
5. **Feedback** (customizable)

---

## 🚫 Bad Approach

- Duplicated code in every class
- No common structure

## ✅ Good Approach

- `OnlineTest` is a base class with a `takeTest()` method (the template).
- Child classes (`AptitudeTest`, `CodingTest`) override only what’s needed.
