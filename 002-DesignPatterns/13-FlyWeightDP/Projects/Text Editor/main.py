
from glyph_factory import GlyphFactory
from character import Character

def main():
    factory = GlyphFactory()
    document = []

    # Add 10,000 characters with repeated font styles
    for i in range(10000):
        glyph = factory.get_glyph("Arial", 12, "bold", "black")
        character = Character("A", (i // 100, i % 100), glyph)
        document.append(character)

    print(f"Total characters: {len(document)}")
    print(f"Unique glyph objects: {len(factory._glyphs)}")

    # Render a few
    document[0].draw()
    document[9999].draw()

if __name__ == "__main__":
    main()
