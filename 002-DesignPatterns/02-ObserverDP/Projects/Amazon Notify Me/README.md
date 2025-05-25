# 🔔 Amazon Notify Me Simulation in Python

This project simulates Amazon's "Notify Me When Back in Stock" feature using the **Observer Design Pattern**.

## 🧱 Structure

- `Product` is the **Subject**
- `User` is the **Observer**
- When `Product.restock()` is called, all subscribers get notified.

## 📦 Features

- Users can subscribe/unsubscribe to product notifications.
- Notification is triggered when a product is restocked.
- Clean and scalable using OOP principles.

## ▶️ Run

```bash
python main.py
