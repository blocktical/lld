# 🎮 Tic Tac Toe Game – Low Level Design

## 🚀 Problem Statement

Design a 2-player Tic Tac Toe game using Object-Oriented Principles that supports:

- Turn-based game logic.
- 3x3 board with moves tracked.
- Win/draw detection.
- Restarting the game.

---

## 🧱 Approach

### 👥 Players

Each player will have a name and symbol (`X` or `O`). The game alternates turns between players.

### 🧩 Game Board

- A 3x3 matrix of cells.
- Each cell may be empty, or marked with a symbol.
- Game detects win or draw based on board state.

---

## 🧠 Classes

| Class         | Responsibility                                |
|---------------|-----------------------------------------------|
| `Player`      | Stores player name and symbol (X/O)           |
| `Cell`        | Stores symbol for each grid cell              |
| `Board`       | Stores and displays the game board            |
| `Game`        | Manages turns, win condition, game lifecycle  |
| `GameStatus`  | Enum to manage status: IN_PROGRESS, WIN, DRAW |

---

## ⚙️ How It Works

1. Game initialized with 2 players.
2. Players take alternate turns by providing row/col.
3. Board updates and checks for win/draw.
4. Game ends with appropriate status.

---
