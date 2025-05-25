# product.py
class Product:
    def __init__(self, name):
        self.name = name
        self.in_stock = False
        self.subscribers = []

    def subscribe(self, user):
        self.subscribers.append(user)
        print(f"✅ {user.name} has subscribed to notifications for '{self.name}'.")

    def unsubscribe(self, user):
        self.subscribers.remove(user)
        print(f"❌ {user.name} unsubscribed from '{self.name}' notifications.")

    def restock(self):
        self.in_stock = True
        print(f"\n📦 '{self.name}' is now back in stock!")
        self.notify_subscribers()

    def notify_subscribers(self):
        for user in self.subscribers:
            user.notify(self.name)
