```mermaid
classDiagram
    class Notification {
        -sender: MessageSender
        +send(message: str)
    }
    class EmailNotification
    class SMSNotification
    class WhatsAppNotification
    class MessageSender {
        +send_message(msg: str)
    }
    class SendGridSender
    class TwilioSender
    class WhatsAppSender

    Notification <|-- EmailNotification
    Notification <|-- SMSNotification
    Notification <|-- WhatsAppNotification
    Notification --> MessageSender
    MessageSender <|-- SendGridSender
    MessageSender <|-- TwilioSender
    MessageSender <|-- WhatsAppSender
