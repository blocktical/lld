# 🧠 Flyweight Design Pattern – JavaScript Implementation

## 🔍 Problem
In high-performance applications like games, if we create thousands of similar objects (like trees, bullets, particles), memory usage shoots up. Most of the data in those objects is **repetitive**.

For example:  
In a forest simulation with 10,000 trees:
- Species: Pine
- Color: Green
- Texture: pine-texture.png  
Only position (x, y) changes.

If we create a full object every time → 💥 Memory overload.

---

## ✅ Solution – Flyweight Pattern

Flyweight pattern **reduces memory usage** by sharing common data among multiple objects.

We split data into:
- **Intrinsic** (shared): species, texture
- **Extrinsic** (unique): x, y position

---


## 🎯 When to Use

- Large number of similar objects
- Repetitive data
- Need for memory optimization

---

## 🛠️ Pattern Summary

| Concept       | Description                    |
|---------------|--------------------------------|
| Intrinsic     | Shared data                    |
| Extrinsic     | Context-specific data          |
| Flyweight     | Shared object instance         |
| Factory       | Manages and reuses flyweights  |

---

