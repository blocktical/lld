# 🧩 Composite Design Pattern

The **Composite Design Pattern** allows you to compose objects into **tree structures** to represent **part-whole hierarchies**. It lets clients treat **individual objects** and **compositions of objects** uniformly.

---

## ✅ Real-Life Analogy

Think of your **computer file system**:

- A **file** is an individual object (leaf).
- A **folder** can contain files **and/or** other folders.
- You can perform operations like `getSize()`, `delete()`, `move()` on both files and folders in the same way.

---

## 💡 Problem Without Composite Pattern

Without this pattern, you'd need separate logic to deal with:
- Individual items (files)
- Groups of items (folders)

This makes the code messy and less scalable.

---

## 🏗️ Structure

```plaintext
Component (FileSystemItem)
├── Leaf (File)
└── Composite (Folder)
```

## ✅ Benefits
Treat files and folders uniformly
Easier to add new types of items (e.g., ZIP files)
Perfect for recursive operations like printing a tree or calculating size

```bash
node good_example.js
```