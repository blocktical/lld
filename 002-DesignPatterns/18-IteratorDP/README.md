# ♻️ Iterator Design Pattern

## 🧠 What is it?

Iterator pattern allows sequential access to elements in a collection without exposing its internal structure.

## 💡 Real World Example
Think of a YouTube playlist — you don’t care how it’s implemented internally. You just press "Next" or "Current" to play the video.

## ❌ Bad Example

Directly using loops over collection logic (not reusable).

## ✅ Good Example

Define an Iterator class to abstract the traversal logic from the collection.

## 🔧 Use Cases
- Playlists, Queues, Trees, Graphs
- Custom data structures traversal

## 📦 Structure

- `Iterator` interface
- `ConcreteIterator`
- `Collection`
- `Client`

## ▶️ How to Run

```bash
node good_example.js
```