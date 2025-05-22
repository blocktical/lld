from formatter_strategy import FormatterStrategy

class ReverseFormatter(FormatterStrategy):
    def format(self, text: str) -> str:
        return text[::-1]
