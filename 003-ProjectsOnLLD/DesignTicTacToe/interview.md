# 🧠 Tic Tac Toe System – Interview Q&A (Collapsible)

<details>
<summary><strong>1. What is the responsibility of each class?</strong></summary>

- `Player`: Stores player identity and symbol.
- `Cell`: One cell of the grid, holds value.
- `Board`: Controls the 3x3 matrix and win checks.
- `Game`: Orchestrates gameplay, switching turns, game over state.

</details>

---

<details>
<summary><strong>2. What design principles are followed?</strong></summary>

- SRP: Each class has one responsibility.
- Encapsulation: Board state is protected via methods.
- Open/Closed: New board sizes or win logic can be added later.

</details>

---

<details>
<summary><strong>3. What is the time and space complexity?</strong></summary>

- Space: O(1) for 3x3 grid.
- Time:
  - Marking cell: O(1)
  - Win check: O(1) (row, col, diagonal)

</details>

---

<details>
<summary><strong>4. How can you extend this game to support AI?</strong></summary>

- Add `BotPlayer` that extends `Player`.
- Implement decision-making using **Minimax** algorithm.

</details>

---

<details>
<summary><strong>5. What if we want a 4x4 board?</strong></summary>

- Change board size dynamically.
- Win condition must adapt (e.g., 4 in a row).
- All win check functions need to support variable dimensions.

</details>

---

<details>
<summary><strong>6. Can this system be used in multiplayer or network play?</strong></summary>

Yes! You can:
- Wrap `Game` logic in REST API.
- Add `GameId` and `PlayerId` for multi-user.
- Use WebSockets for real-time updates.

</details>
