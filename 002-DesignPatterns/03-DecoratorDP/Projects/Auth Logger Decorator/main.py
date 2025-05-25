# main.py
from features import public_data, dashboard, settings
from users import get_users

users = get_users()

for user in users:
    print(f"\n--- Accessing as {user['name']} ---")
    public_data(user)
    dashboard(user)
    settings(user)
