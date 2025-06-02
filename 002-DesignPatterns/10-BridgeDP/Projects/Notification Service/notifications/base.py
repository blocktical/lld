from abc import ABC, abstractmethod
from message_senders.base import MessageSender

class Notification(ABC):
    def __init__(self, sender: MessageSender):
        self.sender = sender

    @abstractmethod
    def notify(self, message: str):
        pass