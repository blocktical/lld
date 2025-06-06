from handlers.base_handler import Handler

class AuthHandler(Handler):
    def handle(self, request):
        if request.token != "valid-token":
            print("❌ Unauthorized request.")
            return
        print("✅ Authenticated.")
        return super().handle(request)