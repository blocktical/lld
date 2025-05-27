# 🧬 Prototype Design Pattern

## 👇 Definition
Prototype pattern allows you to **clone existing objects** rather than creating new ones from scratch — especially when the object creation is expensive (complex logic, API call, deep structure, etc.).

## 🎯 Real-World Use Case
Think of a document editor like Word. If you create a styled template (font, margin, color), you can reuse (clone) that template instead of setting everything from zero every time.

## 🧠 When to Use
- When object creation is **costly**.
- When you want to **avoid subclassing** for small changes.
- When you want to **clone existing objects with modifications**.

## ✅ Benefits
- Reduce object creation cost.
- Simplifies complex object creation logic.
- Avoids duplication of initialization code.

---

## 🔧 Example in JS

We'll build a product catalog system. Instead of building each product from scratch, we’ll clone a base product and modify details.

- [`bad_example.js`](./bad_example.js): Manually creates each product – lots of repetition.
- [`good_example.js`](./good_example.js): Uses Prototype pattern – DRY and efficient.

---

## 🏁 Output Example (good_example.js)

