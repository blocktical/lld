# 📡 Observer Design Pattern in JavaScript

## 🧠 What is the Observer Pattern?

The **Observer Design Pattern** is used when you want one object (**Subject**) to notify other objects (**Observers**) about any changes in its state.

It follows the **Publisher-Subscriber** model.

---

## 💡 Real-Life Example

Imagine a **YouTube Channel**. It has **subscribers** who want to be notified when a new video is uploaded.

- The **channel** is the Subject.
- The **subscribers** are the Observers.
- When the channel uploads a video, all subscribers get notified.

---

## 🧱 Components

| Component   | Description                          |
|------------|--------------------------------------|
| Subject     | Maintains a list of observers        |
| Observer    | Gets notified when subject updates   |
| notify()    | Tells all observers about the change |
| subscribe() | Add an observer                      |
| unsubscribe()| Remove an observer                 |

---

## 🧪 Files

- [`bad_example.js`](./bad_example.js): Hardcoded and tightly coupled example (NOT recommended)
- [`good_example.js`](./good_example.js): Proper implementation using Observer pattern

---

## 🚀 Run

```bash
node good_example.js


---

Happy Designing! ✨  
*— Blocktical by Examsbox -*
