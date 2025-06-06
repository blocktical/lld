# 🧠 Flyweight Design Pattern – Python Example

## ✍️ Project: Memory Efficient Text Editor

### 🎯 Goal:
Render 10,000 characters with only a few shared style objects.

---

## 🛠️ How it works:

- **Glyph (Flyweight):** Shared style (font, size, style, color)
- **Character (Context):** Stores individual char and its position
- **GlyphFactory:** Reuses existing glyphs

---

## 🧪 Output

Total characters: 10000
Unique glyph objects: 1
Rendering 'A' at (0, 0) with style: Arial, 12px, bold, black
Rendering 'A' at (99, 99) with style: Arial, 12px, bold, black

✅ Only **1 glyph** object used for 10,000 characters!
