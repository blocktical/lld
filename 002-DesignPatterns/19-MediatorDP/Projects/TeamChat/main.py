from chatroom import TeamChatRoom
from user import User

if __name__ == "__main__":
    room = TeamChatRoom()

    alice = User("Alice", room)
    bob = User("Bob", room)
    carol = User("Carol", room)

    alice.send("Hi Team!")
    print("---")
    bob.send("Hello Alice!")