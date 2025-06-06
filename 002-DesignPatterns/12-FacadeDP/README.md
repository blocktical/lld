# 🎬 Facade Design Pattern – Simplify Complex Systems

## 🧠 What is Facade Pattern?

The **Facade Design Pattern** provides a unified, simple interface to a set of complex subsystems. It hides the complexity from the client and exposes only what is necessary.

---

## 🎯 Real-Life Analogy

Think of a **Home Theater System**:

Without Facade:
- You manually turn ON projector, sound system, DVD player, dim the lights.

With Facade:
- You just call `watchMovie()` and it handles all the steps for you internally.

---

## 📦 When to Use

- When you have a complex system with many interdependent parts.
- When you want to expose only a **simplified interface** to users.
- To **decouple** client code from subsystems.

---

## ❌ Bad Example (Without Facade)

Client directly interacts with every subsystem. Complex and error-prone.

```js
const dvd = new DVDPlayer();
const projector = new Projector();
const sound = new SoundSystem();
const lights = new Lights();

dvd.on();
projector.turnOn();
sound.setMode("Surround");
lights.dim();

dvd.play("Inception");
