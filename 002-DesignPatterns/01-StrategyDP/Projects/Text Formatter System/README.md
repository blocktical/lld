# 📝 Text Formatter System (Strategy Pattern in Python)

## 💡 What is this?

This project uses the **Strategy Design Pattern** to apply different text formatting strategies (uppercase, lowercase, etc.) dynamically at runtime.

---

## 🔄 Supported Formats

- 🔠 UPPERCASE
- 🔡 lowercase
- 📝 Title Case
- 🔁 Reverse Text

---

## 🧠 Design Structure

- `formatter_strategy.py`: Defines the base interface
- `formatters/`: Contains all formatting strategies
- `context/text_context.py`: Accepts a strategy and applies it
- `main.py`: User interacts here

---

## 🎯 Strategy Pattern Benefit

- Clean separation of formatting logic
- Easy to add new formatters without modifying existing code
- Demonstrates Open/Closed Principle

---

## ▶️ Run

```bash
python main.py
