# 🧠 Memento Design Pattern (JavaScript)

## 🔍 Concept

The Memento Design Pattern allows you to capture and restore an object's internal state without exposing its internal structure — like an **Undo feature** in editors.

## 💡 Real-Life Example

Imagine a text editor where you can type text and press `Undo`. The editor saves snapshots of your content (called Mementos), and when you undo, it restores the last snapshot.

## 🧱 Roles

| Role       | Responsibility                                        |
|------------|--------------------------------------------------------|
| Originator | The object whose state is being saved/restored (Editor) |
| Memento    | Stores the internal state                              |
| Caretaker  | Maintains a list/stack of mementos for undo/redo      |

## 🛑 Bad Example (No Memento)

Typing happens, but there’s no way to undo or revert back.

## ✅ Good Example (With Memento)

We save every edit as a Memento. Undo simply reverts to the previous snapshot.

---

## 📦 Real-World Use Cases

- Undo in Text Editors (VSCode, Word)
- Games: Save and Restore checkpoints
- UI: Undo in graphic design tools
- Git: State Snapshots (Version control)

---
