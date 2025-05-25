# ☁️ Abstract Factory Pattern - Cloud Resource Manager

## 🎯 Goal

This project demonstrates the **Abstract Factory Design Pattern** by managing virtual machines and storage across **AWS**, **Azure**, and **GCP** clouds using a unified interface.

---

## 📦 Modules

- `AbstractVM` and `AbstractStorage`: Common interfaces
- `AWSVM`, `AzureVM`, `GCPVM`: Concrete products
- `AWSFactory`, `AzureFactory`, `GCPFactory`: Concrete factories

---

## 🔄 Flow

1. Choose cloud provider (AWS / Azure / GCP)
2. Get that provider’s factory
3. Create VMs and Storage using the same factory interface

---

## 🧠 Design Pattern

This uses the **Abstract Factory Design Pattern**, which lets the system be:
- Easily extendable
- Scalable to new cloud providers
- Decoupled from concrete classes

---

## ▶️ How to Run

```bash
python main.py
```