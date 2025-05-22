from context.text_context import TextContext
from formatters.uppercase_formatter import UpperCaseFormatter
from formatters.lowercase_formatter import LowerCaseFormatter
from formatters.titlecase_formatter import TitleCaseFormatter
from formatters.reverse_formatter import ReverseFormatter

def main():
    text = input("Enter the text you want to format: ")

    print("\nChoose a formatting style:")
    print("1. UPPERCASE")
    print("2. lowercase")
    print("3. Title Case")
    print("4. Reverse Text")

    choice = input("Enter choice (1-4): ")

    strategy = None

    if choice == "1":
        strategy = UpperCaseFormatter()
    elif choice == "2":
        strategy = LowerCaseFormatter()
    elif choice == "3":
        strategy = TitleCaseFormatter()
    elif choice == "4":
        strategy = ReverseFormatter()
    else:
        print("Invalid choice. Exiting.")
        return

    context = TextContext(strategy)
    formatted = context.format_text(text)

    print(f"\nFormatted Text:\n{formatted}")

if __name__ == "__main__":
    main()
