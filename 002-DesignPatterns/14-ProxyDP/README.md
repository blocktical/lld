# 🔐 Proxy Design Pattern

## 🧠 What is Proxy Pattern?

The Proxy Pattern provides a **placeholder or surrogate object** to control access to another object. It acts as a gatekeeper and can perform actions like **access control**, **lazy loading**, **logging**, **caching**, etc.

---

## 🏠 Real-life Analogy:

Imagine a security guard (proxy) who stands at the gate of a building and decides **who can enter and who cannot**. The people inside (real subject) remain untouched and protected.

---

## 🧱 Structure:

```plaintext
Subject (interface)
├── RealSubject (does the actual work)
└── Proxy (controls access to RealSubject)
```

---
## 🔍 When to Use It?
You need to control access to a real object
You want to delay the creation of a resource-heavy object
You want to add logging, caching, or permission checks

---
## 🔧 Types of Proxies
1. Virtual Proxy	    - Delay resource-heavy operations
2. Protection Proxy	- Access control (auth, roles, etc.)
3. Remote Proxy	    - Access a service over network
4. Smart Proxy	        - Add extra features like logging
