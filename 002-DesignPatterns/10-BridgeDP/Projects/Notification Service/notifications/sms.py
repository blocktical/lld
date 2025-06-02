from notifications.base import Notification

class SMSNotification(Notification):
    def notify(self, message: str):
        self.sender.send(f"[SMS] {message}")