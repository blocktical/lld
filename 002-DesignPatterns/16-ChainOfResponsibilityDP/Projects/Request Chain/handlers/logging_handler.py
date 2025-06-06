from handlers.base_handler import Handler

class LoggingHandler(Handler):
    def handle(self, request):
        print(f"📋 Logging request from user: {request.user}")
        return super().handle(request)