# 🛒 Order Processing System – Facade Design Pattern in Python

## 🎯 Problem
Placing an order on e-commerce involves:
- Inventory check
- Payment
- Shipping
- Notifications
- Loyalty updates

This is complex for clients to manage directly.

---

## 🧩 Solution – Facade Pattern

We create a single class `OrderFacade` that internally calls subsystems like:

- `InventoryService`
- `PaymentGateway`
- `ShippingService`
- `NotificationService`
- `LoyaltyService`

Client only calls:
```python
order_facade.place_order(user_id, item_id)
```