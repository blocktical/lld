from message_senders.base import MessageSender

class WhatsAppSender(MessageSender):
    def send(self, message: str):
        print(f"[WhatsAppAPI] Sending WhatsApp message: {message}")