# glyph_factory.py
from glyph import Glyph

class GlyphFactory:
    def __init__(self):
        self._glyphs = {}

    def get_glyph(self, font, size, style, color):
        key = f"{font}_{size}_{style}_{color}"
        if key not in self._glyphs:
            self._glyphs[key] = Glyph(font, size, style, color)
        return self._glyphs[key]
