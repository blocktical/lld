# 💳 Adapter Design Pattern – Payment Gateway Integration

## 🧠 Problem
Modern apps expect payment gateways to implement a standard `.pay(amount)` interface.  
But some older gateways follow different method names like `.make_payment_via_bank(amount)`.

Modifying legacy code is risky. So we use the **Adapter Pattern** to wrap it.

## 🛠️ Solution – Adapter Pattern
We create a wrapper class (adapter) that **converts old method names to new standard ones**, without touching original class.

## 🔁 Benefits
- Legacy code reuse
- Interface compatibility
- Loose coupling

---

## 🧪 Run It
```bash
python client.py
```