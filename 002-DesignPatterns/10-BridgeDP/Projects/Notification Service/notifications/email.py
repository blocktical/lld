from notifications.base import Notification

class EmailNotification(Notification):
    def notify(self, message: str):
        self.sender.send(f"[EMAIL] {message}")