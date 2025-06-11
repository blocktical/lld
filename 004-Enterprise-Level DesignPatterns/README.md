# 📘 Enterprise-Level Design Patterns (Beyond GoF)

This repository/document outlines important **Enterprise-Level Design Patterns** used in large-scale software systems, beyond the classic GoF (Gang of Four) patterns.

These patterns are widely adopted in enterprise applications, microservices, domain-driven design (DDD), and clean architecture principles.

---

## 📦 Dependency Injection (DI)

- **Category**: Architectural / Structural
- **Purpose**: Inject dependencies instead of creating them manually.
- **Benefits**: Loose coupling, easy testing, better maintainability.
- **Common In**: Spring, NestJS, FastAPI, .NET Core

---

## 🔎 Service Locator *(Anti-pattern now)*

- **Category**: Dependency Resolver
- **Purpose**: Central registry to fetch dependencies.
- **Downside**: Hides class dependencies, considered an anti-pattern in modern design.

---

## 🗃️ Repository Pattern

- **Category**: Data Access
- **Purpose**: Abstract data layer (CRUD) from business logic.
- **Used In**: Spring Data, Django ORM, Entity Framework

---

## 🔄 Unit of Work

- **Category**: Transaction Management
- **Purpose**: Track multiple DB changes and commit as a single unit.
- **Example**: SQLAlchemy Session, EF Core DbContext

---

## 📐 Specification Pattern

- **Category**: Business Rule Composition
- **Purpose**: Reusable, combinable business rule filters.
- **Benefits**: Clean rule separation, flexible queries.

---

## 🧠 Domain-Driven Design (DDD) Patterns

| DDD Component       | Description                                      |
|---------------------|--------------------------------------------------|
| Entity              | Object with identity                             |
| Value Object        | Immutable object with value-based equality       |
| Aggregate           | Root-level consistency boundary                  |
| Domain Event        | Captures important system-level business events  |
| Domain Service      | Business logic outside of entities               |
| Factory             | Centralized complex object creation              |

---

## 🔀 CQRS (Command Query Responsibility Segregation)

- **Purpose**: Separate read (query) and write (command) responsibilities.
- **Benefits**: Performance, scaling, maintainability.

---

## 📜 Event Sourcing

- **Purpose**: Store all state changes as a sequence of immutable events.
- **Benefits**: Complete audit trail, rollback, rebuilding state.

---

## 🧾 Saga Pattern

- **Purpose**: Handle distributed transactions across microservices.
- **Types**: Choreography (event-based) & Orchestration (central coordinator)

---

## 📨 Domain Events

- **Purpose**: Notify other parts of the system when something happens.
- **Benefits**: Decoupled communication, supports eventual consistency.

---

## 🧱 Value Object

- **Purpose**: Represents a descriptive aspect of the domain with no identity.
- **Example**: Money, Address, DateRange

---

## 🚫 Null Object Pattern

- **Purpose**: Avoid null checks by providing a default behavior object.
- **Benefits**: Safer, cleaner code.

---

## 🔁 Template Callback Pattern

- **Use**: Framework defines the control structure; user passes the custom logic as callback.
- **Example**: Spring JdbcTemplate, Express middleware

---

## 💡 Summary Table

| Pattern              | Purpose                                           |
|----------------------|---------------------------------------------------|
| Dependency Injection | Inject dependencies to reduce coupling            |
| Repository           | Abstract persistence layer                        |
| Unit of Work         | Handle atomic data operations                     |
| Specification        | Composable business logic                         |
| DDD Components       | Model complex domains                             |
| CQRS                 | Separate read/write paths                         |
| Event Sourcing       | Maintain state via events                         |
| Saga Pattern         | Manage distributed workflows                      |
| Domain Events        | Decoupled communication on important changes      |
| Value Object         | Value-based equality for small domain elements    |
| Null Object          | Avoid `null` logic branches                       |
| Template Callback    | Inversion of control via customizable steps       |

---

## 📚 References

- [Domain-Driven Design by Eric Evans](https://www.domainlanguage.com/)
- [Patterns of Enterprise Application Architecture by Martin Fowler](https://martinfowler.com/eaaCatalog/)
- [Microsoft Docs on Architecture Patterns](https://learn.microsoft.com/en-us/azure/architecture/patterns/)
- [Spring Framework Docs](https://docs.spring.io/)
- [Clean Architecture - Robert C. Martin](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)

---

## ✅ Usage

Use this document as a guide to understand **real-world architecture patterns** that extend beyond the GoF principles to handle more complex enterprise requirements.

