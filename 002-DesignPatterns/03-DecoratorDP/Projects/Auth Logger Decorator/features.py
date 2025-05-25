# features.py
from decorators import authenticate, log

@log
def public_data(user):
    print(f"📖 Public Data: Hello {user['name']}!")

@log
@authenticate
def dashboard(user):
    print(f"📊 Dashboard: Welcome back, {user['name']}!")

@log
@authenticate
def settings(user):
    print(f"⚙️ Settings: Manage your account, {user['name']}")
