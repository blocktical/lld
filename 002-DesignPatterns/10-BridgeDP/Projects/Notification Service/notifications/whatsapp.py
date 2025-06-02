from notifications.base import Notification

class WhatsAppNotification(Notification):
    def notify(self, message: str):
        self.sender.send(f"[WHATSAPP] {message}")