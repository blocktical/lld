# 🧪 Abstract Factory Design Pattern

## 📘 What is Abstract Factory?

The Abstract Factory Pattern is a **creational design pattern** that provides an **interface for creating families of related or dependent objects**, without specifying their concrete classes.

---

## 💡 Real-Life Example

Let’s say you’re building a **themed UI system**. Based on the current theme (Light or Dark), you want to create:

- Button
- Input Box

You want to make sure that all components follow the same theme consistently.

---

## ❌ Problem Without Abstract Factory

You have to write many `if-else` conditions in multiple places to check the theme before creating each object.

It becomes:

- Hard to maintain
- Error-prone
- Violates Open-Closed Principle

---

## ✅ Solution With Abstract Factory

Use an **Abstract Factory** to create groups of related objects (UI components).  
Let a **factory** decide what theme of objects to return.

---

## 📁 Files

- `bad_example.js`: Without Abstract Factory (lots of theme condition checks)
- `good_example.js`: Using Abstract Factory Design Pattern
