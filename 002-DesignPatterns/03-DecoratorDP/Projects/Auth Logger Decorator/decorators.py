# decorators.py
from functools import wraps

def authenticate(func):
    @wraps(func)
    def wrapper(user, *args, **kwargs):
        if not user.get("is_authenticated", False):
            print(f"❌ Access Denied for {user['name']}: User not authenticated.")
            return
        print(f"🔐 Authenticated Access Granted to {user['name']}")
        return func(user, *args, **kwargs)
    return wrapper

def log(func):
    @wraps(func)
    def wrapper(user, *args, **kwargs):
        print(f"📝 Logging: {user['name']} is trying to access {func.__name__}")
        result = func(user, *args, **kwargs)
        print(f"✅ Finished execution of {func.__name__}")
        return result
    return wrapper
