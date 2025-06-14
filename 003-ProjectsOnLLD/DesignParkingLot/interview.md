# 💼 Parking Lot System – Interview Q&A (Collapsible Style)

> Prepare for MAANG-style Low-Level Design interviews with this interactive collapsible Q&A guide based on the Parking Lot System.

---

<details>
<summary><strong>1. What are the main entities in your Parking Lot system?</strong></summary>

The key entities include:
- `Vehicle` (Car, Bike, Truck)
- `ParkingSlot`
- `ParkingLevel`
- `ParkingLot`
- `ParkingTicket`
- `Gate` (EntryGate, ExitGate)
- `PaymentService` & `PaymentStrategy`
- `ParkingManager` (Singleton controller)

Each class is designed using OOP principles to map real-world objects.

</details>

---

<details>
<summary><strong>2. How does your design follow SOLID principles?</strong></summary>

✅ **S – SRP**: Each class has one responsibility (e.g., `ParkingManager` manages allocation).  
✅ **O – OCP**: Easy to extend new vehicle or slot types.  
✅ **L – LSP**: Subtypes like `Car`/`Bike` are usable in place of `Vehicle`.  
✅ **I – ISP**: Interfaces (e.g., `PaymentStrategy`) are specific.  
✅ **D – DIP**: `PaymentService` depends on an abstract strategy.

</details>

---

<details>
<summary><strong>3. What design patterns did you use?</strong></summary>

| Pattern           | Used For                            |
|------------------|-------------------------------------|
| Strategy          | Payment calculation per vehicle     |
| Singleton         | `ParkingManager` (central controller) |
| Factory (optional)| Vehicle or Ticket creation          |
| Template Method   | Entry/Exit processing (optional)    |
| Observer (optional)| Slot availability notification     |

</details>

---

<details>
<summary><strong>4. How will you scale the system to multiple levels/gates?</strong></summary>

- Add multiple `ParkingLevel` objects to `ParkingLot`.
- Entry/Exit Gates are stateless and call `ParkingManager`.
- Manager handles distributed parking decisions.

</details>

---

<details>
<summary><strong>5. How will you ensure thread safety?</strong></summary>

- Use synchronization/mutex around slot assignment.
- Ticket creation must be atomic.
- Consider concurrent data structures or Redis for distributed locks.

</details>

---

<details>
<summary><strong>6. What happens if a gate service fails?</strong></summary>

- Use retry or queue-based async communication.
- Apply circuit breaker patterns in a microservice setup.

</details>

---

<details>
<summary><strong>7. How is fee calculated for different vehicles?</strong></summary>

- `PaymentStrategy` interface is implemented differently:
  - `CarPaymentStrategy`
  - `BikePaymentStrategy`
  - `TruckPaymentStrategy`
- Each calculates based on duration.

</details>

---

<details>
<summary><strong>8. Which data structures are used internally?</strong></summary>

- `MinHeap` or `PriorityQueue` → Efficient nearest slot lookup  
- `HashMap<SlotType, List<ParkingSlot>>` → Categorized slots  
- `Map<VehicleNo, ParkingTicket>` → Quick ticket lookup

</details>

---

<details>
<summary><strong>9. How would you extend the system for EVs or Reserved Slots?</strong></summary>

- Add metadata/tag to `ParkingSlot` for:
  - EV Charging
  - Handicapped Accessibility
- Filter slots in `getAvailableSlot()` based on need.

</details>

---

<details>
<summary><strong>10. How will you persist and recover state after crash?</strong></summary>

- Use DB to store:
  - Ticket info
  - Occupied slots
  - Payments
- On startup: preload into memory for quick access

</details>

---

<details>
<summary><strong>🧠 Bonus: High-Level Design Follow-ups</strong></summary>

- Add services: Entry, Exit, Ticketing, SlotService
- Load Balancer to distribute traffic
- Redis + Kafka for real-time updates
- ANPR (Auto Number Plate Recognition)
- Online reservation system

</details>

---

<details>
<summary><strong>📈 Extra: Real Interview Follow-Up Questions</strong></summary>

- What if user wants to pre-book a slot?
- How do you handle surge pricing on weekends?
- Can you expose this via REST API?
- How will mobile apps use this system?

</details>

---
