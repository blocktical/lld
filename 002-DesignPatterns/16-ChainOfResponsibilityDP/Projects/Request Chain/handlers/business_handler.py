from handlers.base_handler import Handler

class BusinessHandler(Handler):
    def handle(self, request):
        print(f"✅ Processing request for user {request.user} with data: {request.data}")