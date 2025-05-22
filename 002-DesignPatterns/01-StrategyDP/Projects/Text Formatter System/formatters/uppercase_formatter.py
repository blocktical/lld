from formatter_strategy import FormatterStrategy

class UpperCaseFormatter(FormatterStrategy):
    def format(self, text: str) -> str:
        return text.upper()
