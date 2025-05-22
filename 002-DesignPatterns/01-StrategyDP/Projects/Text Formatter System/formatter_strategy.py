from abc import ABC, abstractmethod

class FormatterStrategy(ABC):
    @abstractmethod
    def format(self, text: str) -> str:
        pass