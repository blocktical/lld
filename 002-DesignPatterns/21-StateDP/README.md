# 🧾 State Design Pattern

## 🤔 What is it?

The State Pattern allows an object to change its behavior when its internal state changes. It avoids large conditional blocks by encapsulating state-based behavior in separate classes.

---

## 🔧 Components:
- **Context**: Main object (e.g., Order)
- **State Interface**: Common interface for state behaviors
- **Concrete States**: Classes like `CreatedState`, `PaidState`, `ShippedState`

---

## 🔥 Why use it?

- Avoid if-else/switch-case clutter
- Add new states without breaking existing logic
- Clean, extensible, and testable code

---

## 📦 Example Use Case

An Order moves from:
`Created → Paid → Shipped → Delivered`

Each state defines what to do next.

