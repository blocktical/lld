from formatter_strategy import FormatterStrategy

class LowerCaseFormatter(FormatterStrategy):
    def format(self, text: str) -> str:
        return text.lower()
