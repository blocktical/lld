# 🧠 Form Data Recovery System using Memento Pattern (Python)

## 🧩 Problem Statement

In complex forms (like banking, KYC, job applications), users often want to go back to previous steps without losing data. We simulate a form with undo capability using the **Memento Pattern**.

## 🏗️ Design Pattern Used

**Memento Pattern** to save/restore form state.

### 🧱 Components:
- **Form** (Originator): holds current state
- **FormMemento**: stores snapshot of form state
- **Caretaker**: saves and manages memento stack

## 🎯 Features:
- Fill form step-by-step
- Undo previous form state
- Retain all field values after undo

## 💻 Run It:

```bash
python main.py