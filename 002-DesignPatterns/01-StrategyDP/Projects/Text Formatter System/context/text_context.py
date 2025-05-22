class TextContext:
    def __init__(self, strategy):
        self._strategy = strategy

    def set_strategy(self, strategy):
        self._strategy = strategy

    def format_text(self, text: str) -> str:
        return self._strategy.format(text)
