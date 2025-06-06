# 🧠 Command Design Pattern (JavaScript)

## 📌 What is It?

Command Design Pattern encapsulates a **request** as an **object**, allowing:
- Parameterization of clients with commands
- Logging, queuing, or undoing operations

---

## 🤔 Real-Life Analogy

> Imagine a **TV Remote**. Each button (Volume Up, Power Off) is a Command. The remote doesn't care **how** it happens, just **what** should happen.

---

## 🧱 Structure

Client → Invoker → Command → Receiver

- **Client**: Who creates commands
- **Invoker**: Who executes the commands
- **Command**: Interface to execute and undo
- **Receiver**: Actual object that performs the work

---

## ✅ When to Use?
- GUI Buttons / Menu Actions
- Undo / Redo
- Macro / Batch commands
- Task Queues

---

## 📦 Example

### Scenario:
You’re making a **Text Editor** with actions:
- Write text
- Undo last write

Command pattern makes this flexible, extendable, and undo-able.

---

## 🔁 Undo Support?

Yes! Each command knows how to undo itself.

---

## 🔥 Benefits

- Loosely coupled code
- Easy to add new commands
- Can implement undo/redo/macro recording
