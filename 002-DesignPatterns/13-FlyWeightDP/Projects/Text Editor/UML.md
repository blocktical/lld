```mermaid
classDiagram
    class Glyph {
        +font: str
        +size: int
        +style: str
        +color: str
        +render(character: str, position: tuple)
    }

    class GlyphFactory {
        -_glyphs: dict
        +get_glyph(font: str, size: int, style: str, color: str): Glyph
    }

    class Character {
        +char: str
        +position: tuple
        +glyph: Glyph
        +draw()
    }

    class Main {
        +main()
    }

    GlyphFactory "1" --> "*" Glyph : manages
    Character --> Glyph : uses
    Main --> GlyphFactory : creates
    Main --> Character : creates