from abc import ABC, abstractmethod

class Handler(ABC):
    def __init__(self):
        self.next = None

    def set_next(self, handler):
        self.next = handler
        return handler

    @abstractmethod
    def handle(self, request):
        if self.next:
            return self.next.handle(request)