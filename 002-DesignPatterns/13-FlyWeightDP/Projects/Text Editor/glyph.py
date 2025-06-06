# glyph.py
class Glyph:
    def __init__(self, font, size, style, color):
        self.font = font
        self.size = size
        self.style = style
        self.color = color

    def render(self, character, position):
        print(f"Rendering '{character}' at {position} with style: "
              f"{self.font}, {self.size}px, {self.style}, {self.color}")
