```mermaid
classDiagram
    class Employee {
        <<abstract>>
        +get_salary()
        +show_structure(indent)
    }

    class IndividualContributor {
        -name: str
        -salary: float
        +get_salary()
        +show_structure(indent)
    }

    class Manager {
        -name: str
        -salary: float
        -subordinates: List~Employee~
        +add(employee)
        +get_salary()
        +show_structure(indent)
    }

    Employee <|-- IndividualContributor
    Employee <|-- Manager
    Manager --> Employee : manages