# 🧠 Interpreter Design Pattern – Simple & Practical Guide

## 📖 What is Interpreter Pattern?

Interpreter pattern ek aisa design pattern hai jiska use **kisi custom language, expression ya rules** ko samajhne (interpret karne) ke liye hota hai. Is pattern mein hum **har grammar rule ke liye ek class** banate hain jo wo rule samajh sake.

> Agar tumne khud ka calculator ya filtering language banai ho, to Interpreter pattern use hota hai.

---

## 🎯 Real-Life Analogy

Imagine karo tum ek calculator app bana rahe ho jo user se input leta hai:

"1 + 2 + 3"


Tum chahte ho ki har part (1, +, 2, +, 3) ko tumhara code samjhe aur result nikaale = **6**.

Har number ek **TerminalExpression** hoga, aur har `+` ek **NonTerminalExpression**.

---

## 🧱 Pattern Structure (Simple Version)

- `Expression`: Base interface ya abstract class
- `NumberExpression`: TerminalExpression (actual number)
- `AddExpression`: NonTerminalExpression (e.g., + operation)
- `Context`: Input and data holder
