# users.py
# Fake users for demo

def get_users():
    return [
        {"name": "Alice", "is_authenticated": True},
        {"name": "Bob", "is_authenticated": False},
        {"name": "Charlie", "is_authenticated": True},
    ]
