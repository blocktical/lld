class NotificationService:
    def send_confirmation(self, user_id, item_id):
        print(f"[Notification] Email confirmation sent to user {user_id} for item {item_id}.")
