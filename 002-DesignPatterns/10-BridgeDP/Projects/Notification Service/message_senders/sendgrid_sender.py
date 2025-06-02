from message_senders.base import MessageSender

class SendGridSender(MessageSender):
    def send(self, message: str):
        print(f"[SendGrid] Sending Email: {message}")