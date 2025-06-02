# 📬 Notification Service (Bridge Design Pattern in Python)

This project demonstrates the **Bridge Design Pattern** with a real-world use case: a **Notification Service** system. The Bridge pattern helps decouple an abstraction from its implementation, allowing them to vary independently.

---

## 📌 Use Case

Imagine you're building a notification system that can send messages through multiple channels (Email, SMS, WhatsApp), and each channel can use different service providers (SendGrid, Twilio, WhatsApp API). We want to be able to mix and match **notification types** and **message senders** without creating redundant classes.

---

## 🧠 Design Breakdown

### 🧱 Bridge Pattern

| Role                 | Class/Interface             | Description                                           |
|----------------------|-----------------------------|-------------------------------------------------------|
| Abstraction          | `Notification`              | Base class for all types of notifications             |
| Refined Abstractions | `EmailNotification`, `SMSNotification`, `WhatsAppNotification` | Specific notification channels        |
| Implementor          | `MessageSender`             | Interface for sending messages                        |
| Concrete Implementors| `SendGridSender`, `TwilioSender`, `WhatsAppSender` | Actual providers used to send messages |



```bash
python main.py
```