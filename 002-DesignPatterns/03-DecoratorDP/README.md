# ☕ Decorator Design Pattern in JavaScript

## 🧠 Concept

The **Decorator Pattern** lets you dynamically add behavior to objects without modifying their structure.

It is useful when:

- You want to add features to existing classes
- You don’t want to modify the original class
- You want to keep code clean, open for extension but closed for modification (SOLID Principle)

---

## 💡 Example Scenario: Coffee Shop

- Base Object: `Coffee`
- Decorators: `Milk`, `Sugar`, `Cream`

---

## ❌ bad_example.js

Hardcoded logic. Difficult to extend.

## ✅ good_example.js

Uses decorators to dynamically add features to `Coffee`.

---

## ▶️ Run

```bash
node good_example.js
```

---

Happy Designing! ✨  
*— Blocktical by Examsbox -*