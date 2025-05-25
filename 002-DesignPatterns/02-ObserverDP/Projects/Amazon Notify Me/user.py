# user.py
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email

    def notify(self, product_name):
        print(f"🔔 Notification sent to {self.name} ({self.email}): '{product_name}' is back in stock!")
