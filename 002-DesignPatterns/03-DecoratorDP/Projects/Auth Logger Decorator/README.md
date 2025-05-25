# 🔐 Real-Life Decorator Design Pattern Example (Python)

This project simulates an authentication and logging system using **Python decorators** (Decorator Design Pattern).

## 🎯 Objective

- Add features like **authentication** and **logging** to functions **without modifying them**.
- Demonstrate real-world use of decorators.

---

## 💡 Features

- `@authenticate` – blocks access if user is not logged in.
- `@log` – logs access and exit of each function.
- Stackable decorators!

---

## 🧪 Example Output

```text
--- Accessing as Alice ---
📝 Logging: Alice is trying to access public_data
📖 Public Data: Hello Alice!
✅ Finished execution of public_data
📝 Logging: Alice is trying to access dashboard
🔐 Authenticated Access Granted to Alice
📊 Dashboard: Welcome back, Alice!
✅ Finished execution of dashboard
📝 Logging: Alice is trying to access settings
🔐 Authenticated Access Granted to Alice
⚙️ Settings: Manage your account, Alice
✅ Finished execution of settings

--- Accessing as Bob ---
📝 Logging: Bob is trying to access public_data
📖 Public Data: Hello Bob!
✅ Finished execution of public_data
📝 Logging: Bob is trying to access dashboard
❌ Access Denied for Bob: User not authenticated.
✅ Finished execution of dashboard
...
```

---

Happy Designing! ✨  
*— Blocktical by Examsbox -*
