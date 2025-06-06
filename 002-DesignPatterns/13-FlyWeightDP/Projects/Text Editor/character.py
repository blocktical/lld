# character.py
class Character:
    def __init__(self, char, position, glyph):
        self.char = char
        self.position = position
        self.glyph = glyph

    def draw(self):
        self.glyph.render(self.char, self.position)
