from message_senders.base import MessageSender

class TwilioSender(MessageSender):
    def send(self, message: str):
        print(f"[Twilio] Sending SMS: {message}")