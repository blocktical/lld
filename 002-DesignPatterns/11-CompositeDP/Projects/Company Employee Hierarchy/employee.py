from abc import ABC, abstractmethod

# Base Component
class Employee(ABC):
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    @abstractmethod
    def get_salary(self):
        pass

    @abstractmethod
    def show_structure(self, indent=0):
        pass

# Leaf
class IndividualContributor(Employee):
    def get_salary(self):
        return self.salary

    def show_structure(self, indent=0):
        print(" " * indent + f"👤 {self.name} (${self.salary})")

# Composite
class Manager(Employee):
    def __init__(self, name, salary):
        super().__init__(name, salary)
        self.subordinates = []

    def add(self, employee):
        self.subordinates.append(employee)

    def get_salary(self):
        total = self.salary
        for emp in self.subordinates:
            total += emp.get_salary()
        return total

    def show_structure(self, indent=0):
        print(" " * indent + f"👑 {self.name} (${self.salary})")
        for emp in self.subordinates:
            emp.show_structure(indent + 4)
