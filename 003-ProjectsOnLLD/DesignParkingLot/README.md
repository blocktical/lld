# 🚗 Parking Lot System – LLD Design

A detailed Low-Level Design (LLD) of a **Parking Lot System**, inspired by real-world interview problems at MAANG and top tech companies.

---

## 📌 Problem Statement

Design a scalable Parking Lot System to manage multiple vehicle types, multiple levels, parking slots, entry/exit operations, and dynamic fee calculation.

---

## 🧩 Key Functional Requirements

- ✅ Support multiple levels and slots per level
- ✅ Different vehicle types: Bike, Car, Truck
- ✅ Assign nearest available parking slot
- ✅ Issue a parking ticket with timestamp and vehicle details
- ✅ On exit, calculate the fee based on vehicle type and duration
- ✅ Free the slot after vehicle exits
- ✅ Track availability and status of slots
- ✅ Centralized Parking Manager

---

## 🧱 Key Components

| Component        | Description |
|------------------|-------------|
| `Vehicle`        | Abstract class for Bike, Car, Truck |
| `ParkingSlot`    | Represent slots (with type and status) |
| `ParkingLevel`   | Each level manages multiple slots |
| `ParkingLot`     | Holds levels and metadata |
| `ParkingTicket`  | Issued on entry, used on exit |
| `Gate`           | EntryGate & ExitGate logic |
| `PaymentService` | Calculates fee (uses Strategy Pattern) |
| `ParkingManager` | Orchestrates the entire process |

---

## ⚙️ Design Patterns Used

| Pattern               | Why? |
|------------------------|------|
| **Strategy**           | Fee calculation strategies per vehicle type |
| **Factory**            | Creating vehicle objects dynamically |
| **State**              | Slot can be FREE or OCCUPIED |
| **Singleton**          | ParkingManager (central controller) |
| **Observer (optional)**| Notify system/admin when level is full |

---

## 📂 Project Structure

parking-lot-system/
│
├── README.md
├── UML.md
├── models/
│ ├── vehicle.py
│ ├── parking_slot.py
│ ├── parking_level.py
│ ├── parking_lot.py
│ ├── gate.py
│ ├── ticket.py
│ ├── payment_service.py
│ └── manager.py

---

## 🚘 Core Flow

### 🅿️ Entry Flow:
1. Vehicle arrives at EntryGate
2. Manager assigns the nearest available slot
3. Generates a Ticket and marks slot as OCCUPIED

### 💸 Exit Flow:
1. Vehicle arrives at ExitGate and shows ticket
2. Fee is calculated using time and vehicle type
3. Slot is marked FREE again

---

## 💡 Sample Classes

### Vehicle
```python
class Vehicle:
    def __init__(self, number_plate):
        self.number_plate = number_plate

class Car(Vehicle): pass
class Bike(Vehicle): pass
class Truck(Vehicle): pass

class ParkingSlot:
    def __init__(self, slot_id, slot_type):
        self.slot_id = slot_id
        self.slot_type = slot_type
        self.is_occupied = False

class PaymentStrategy:
    def calculate_fee(self, duration): pass

class CarPaymentStrategy(PaymentStrategy):
    def calculate_fee(self, duration):
        return duration * 10

class BikePaymentStrategy(PaymentStrategy):
    def calculate_fee(self, duration):
        return duration * 5

class SlotState:
    FREE = 'FREE'
    OCCUPIED = 'OCCUPIED'
```

---

### 📈 Extensibility
Add Electric Charging Slot type
Add Display Board for each level
Use external DB for persistence
Extend for multi-parking lot management (franchises)
Add online reservation system

