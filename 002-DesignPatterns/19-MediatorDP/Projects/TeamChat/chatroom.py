class ChatRoomMediator:
    def show_message(self, sender, message):
        raise NotImplementedError("This method should be overridden.")
    
class TeamChatRoom(ChatRoomMediator):
    def __init__(self):
        self.users = []

    def register(self, user):
        self.users.append(user)

    def show_message(self, sender, message):
        print(f"[{sender.name}] says: {message}")
        for user in self.users:
            if user != sender:
                user.receive(message, sender)