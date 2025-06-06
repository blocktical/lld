```mermaid
classDiagram
    class Handler {
        <<abstract>>
        - next: Handler
        +set_next(handler: Handler): Handler
        +handle(request: Request)
    }

    class LoggingHandler {
        +handle(request: Request)
    }

    class AuthHandler {
        +handle(request: Request)
    }

    class ValidationHandler {
        +handle(request: Request)
    }

    class BusinessHandler {
        +handle(request: Request)
    }

    class Request {
        +user: str
        +data: str
        +token: str
    }

    Handler <|-- LoggingHandler
    Handler <|-- AuthHandler
    Handler <|-- ValidationHandler
    Handler <|-- BusinessHandler

    LoggingHandler --> Request
    AuthHandler --> Request
    ValidationHandler --> Request
    BusinessHandler --> Request
