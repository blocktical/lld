# 🧩 TeamChat — Mediator Design Pattern (Python)

This is a real-time simulation of a **Team Chatroom** where multiple users communicate through a **Mediator**, instead of directly messaging each other.

## 🧠 Pattern Used: Mediator

- Removes tight coupling between users
- All messages are routed via the ChatRoom (Mediator)
- Scales well for large systems (hundreds of users)

## 💡 Real-World Relevance

Used in:
- Slack / WhatsApp internal architecture
- EventBus systems
- Centralized UI widget controllers

## 🔁 Files

- `chatroom.py`: Mediator Interface and Concrete Mediator
- `user.py`: Users interacting via the Mediator
- `main.py`: Execution and testing