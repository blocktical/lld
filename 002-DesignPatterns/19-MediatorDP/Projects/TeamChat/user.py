class User:
    def __init__(self, name, chatroom):
        self.name = name
        self.chatroom = chatroom
        self.chatroom.register(self)

    def send(self, message):
        print(f">>> {self.name} sending message: {message}")
        self.chatroom.show_message(self, message)

    def receive(self, message, sender):
        print(f"{self.name} received from {sender.name}: {message}")