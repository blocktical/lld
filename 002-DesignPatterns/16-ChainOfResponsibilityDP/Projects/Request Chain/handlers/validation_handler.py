from handlers.base_handler import Handler

class ValidationHandler(Handler):
    def handle(self, request):
        if not request.data:
            print("❌ Invalid request: No data provided.")
            return
        print("📦 Data validated.")
        return super().handle(request)