```mermaid
classDiagram
    class ChatRoomMediator {
        +show_message(sender, message)
    }

    class TeamChatRoom {
        +register(user)
        +show_message(sender, message)
        users: list
    }

    class User {
        -name
        -chatroom
        +send(message)
        +receive(message, sender)
    }

    ChatRoomMediator <|-- TeamChatRoom
    TeamChatRoom <.. User : Mediates