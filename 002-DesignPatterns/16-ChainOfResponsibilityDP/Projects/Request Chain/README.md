# 🔗 Chain of Responsibility - Request Handler Example

This project demonstrates the **Chain of Responsibility Design Pattern** using a real-world inspired API request processing system.

## 📌 Flow
1. **LoggingHandler** → Logs every request
2. **AuthHandler** → Verifies user token
3. **ValidationHandler** → Ensures valid request data
4. **BusinessHandler** → Processes the request

## 🧠 Why This Pattern?
- Decouples sender and receiver
- Dynamically adds/removes processing steps
- Clean, maintainable handler chain

## ▶️ Run

```bash
python main.py
```