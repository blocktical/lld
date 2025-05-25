# main.py
from product import Product
from user import User

# Create a product
ps5 = Product("PlayStation 5")

# Create users
alice = User("Alice", "alice@example.com")
bob = User("Bob", "bob@example.com")
chintu = User("Chintu", "chintu@example.com")

# Users subscribe to the product
ps5.subscribe(alice)
ps5.subscribe(bob)
ps5.subscribe(chintu)

# Bob unsubscribes
ps5.unsubscribe(bob)

# Product is restocked
ps5.restock()
