# 🗃️ Workflow Automation System – State Design Pattern

## 🔍 Objective

This project demonstrates the **State Design Pattern** in Python using a Document Approval Workflow.

---

## 🧾 Workflow States

- Draft
- Submitted
- Reviewed
- Approved
- Published

Each state defines its behavior and transitions to the next state.

---

## 📦 Components

- `Document`: Context class
- `State Interface`: Common method `handle(document)`
- `Concrete States`: Draft, Submitted, Reviewed, Approved, Published