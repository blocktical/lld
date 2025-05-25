# 🏭 Factory Design Pattern

## 📘 What is Factory Design Pattern?

The Factory Design Pattern is a **creational pattern** that provides a way to create objects **without specifying the exact class** of the object that will be created.

It defines an **interface for creating an object**, but lets subclasses decide which class to instantiate. It **promotes loose coupling** by eliminating the need to bind application-specific classes into the code.

---

## 🧠 Real-Life Example

Imagine you're building a **notification system**. Based on user preferences, you might need to send:

- Email notifications
- SMS notifications
- Push notifications

Instead of writing conditions everywhere to create these objects, you use a factory that gives you the correct notification sender object.

---

## 📉 Problem With Bad Design

If we keep using `if-else` or `switch-case` all over the codebase to create objects, it makes the system:

- Hard to maintain
- Difficult to extend
- Violates Open-Closed Principle

---

## 🛠 Solution With Factory Pattern

Encapsulate object creation inside a **factory class/function**, so the client code doesn’t need to care about the details of object creation.

---

## 📁 Files

- `bad_example.js`: Poor design using multiple `if-else` to create notification objects.
- `good_example.js`: Refactored version using Factory Design Pattern.


---

Happy Designing! ✨  
*— Blocktical by Examsbox -*