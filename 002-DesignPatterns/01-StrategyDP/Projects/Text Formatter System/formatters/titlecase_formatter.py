from formatter_strategy import FormatterStrategy

class TitleCaseFormatter(FormatterStrategy):
    def format(self, text: str) -> str:
        return text.title()
