# 🌦️ Rate-Limited Weather API Client (Proxy Pattern in Python)

## 🔍 What is this?

A real-world example using the **Proxy Design Pattern** to protect an API from being overused (rate limiting). The proxy controls how often the real API client is allowed to make requests.

---

## 🎯 Features

- Wraps a real API client (simulated here)
- Allows only N requests per T seconds
- Blocks/Delays extra requests
- Logs request attempts

---

## 🧱 How It Works

- `WeatherAPIClient`: Real object that simulates an API call
- `RateLimitedProxy`: Proxy that tracks how many times API is called
- `main.py`: Demonstrates usage

---

## 🧪 Try It Yourself

```bash
python main.py
```