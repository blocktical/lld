# 🏠 Smart Home Automation (Command Pattern)

This project simulates a Smart Home Remote using the **Command Design Pattern** in Python.

## ✅ Features

- Turn ON/OFF lights and fans
- Maintain command history
- Undo any action

## 📦 Structure

- `devices/`: Receivers (Fan, Light)
- `commands/`: Command objects
- `invoker.py`: RemoteControl that calls commands
- `main.py`: Client code

## 🧠 Why Command Pattern?

- Each action is encapsulated
- Supports undo/redo
- Easily extendable (add AC, Door, etc.)

## ▶️ Run

```bash
python main.py
```