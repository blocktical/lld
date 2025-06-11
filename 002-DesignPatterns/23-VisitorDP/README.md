# 👀 Visitor Design Pattern – Explained

## 🧠 What is Visitor Pattern?

The Visitor Pattern allows you to add **new operations** to a group of existing object classes **without modifying** them.

It follows the **Open/Closed Principle** – open for extension, closed for modification.

---

## 🏗️ Structure

- `Element`: An object structure you want to perform operations on (e.g., `Manager`, `Developer`)
- `Visitor`: Interface/class that defines an operation for each element
- `ConcreteVisitor`: Implements logic for each element
- `accept(visitor)`: Method in element that accepts a visitor

---

## ❌ Problem Without Visitor (Tightly coupled logic)
Adding operations means changing each class again and again.

---

## ✅ Solution With Visitor
All operations are extracted into external `Visitor` classes — no need to touch your core business objects.

---

## 💼 Real-World Example

Let’s say you have `Developer` and `Manager` classes.

- Now you want to perform multiple operations:
  - Print details
  - Calculate bonus
  - Generate appraisal report

Instead of modifying these classes again and again, we write external visitors for each operation.

---

## 📦 Benefits

✅ Clean separation of concerns  
✅ Easier to add new functionality  
✅ Avoids breaking existing code  

---

## 📉 Drawbacks

❌ Harder if object structure changes often  
❌ Boilerplate code with accept methods

---

## 📁 Files

- `bad_example.js`: Without Visitor – repetitive, tightly coupled  
- `good_example.js`: Clean implementation using Visitor
