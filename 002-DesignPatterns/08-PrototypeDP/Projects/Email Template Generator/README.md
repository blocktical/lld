# 📩 Email Template Generator – Prototype Pattern in Python

## 🧠 Problem
In real IT systems, we often need to send multiple emails that share a similar structure. For example:
- Welcome emails
- Password resets
- Payment confirmations

Manually creating each email object leads to repetitive code and is hard to maintain.

## ✅ Solution – Prototype Pattern
We define a base `EmailTemplate`, and instead of reinitializing from scratch, we clone it and modify the necessary fields.

## 📌 Technologies
- Python 3
- OOP concepts
- Prototype design pattern

## 🔁 Benefits
- Reduces repetition
- Centralized control of structure
- Easy to test and update template styles

---

## ▶️ Run the Code

```bash
python prototype_client.py
```