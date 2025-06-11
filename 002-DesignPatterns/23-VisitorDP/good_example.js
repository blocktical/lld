class Employee {
    accept(visitor) {
        visitor.visit(this);
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super();
        this.name = name;
        this.salary = salary;
    }

    accept(visitor) {
        visitor.visitDeveloper(this);
    }
}

class Manager extends Employee {
    constructor(name, salary) {
        super();
        this.name = name;
        this.salary = salary;
    }

    accept(visitor) {
        visitor.visitManager(this);
    }
}

// Visitor Interface
class EmployeeVisitor {
    visitDeveloper(dev) {}
    visitManager(mgr) {}
}

// Concrete Visitor 1 – Print Details
class DetailPrinter extends EmployeeVisitor {
    visitDeveloper(dev) {
        console.log(`Developer: ${dev.name}, Salary: ${dev.salary}`);
    }

    visitManager(mgr) {
        console.log(`Manager: ${mgr.name}, Salary: ${mgr.salary}`);
    }
}

// Concrete Visitor 2 – Give Bonus
class BonusGiver extends EmployeeVisitor {
    visitDeveloper(dev) {
        console.log(`${dev.name} got bonus: ${dev.salary * 0.1}`);
    }

    visitManager(mgr) {
        console.log(`${mgr.name} got bonus: ${mgr.salary * 0.2}`);
    }
}

// Usage
const dev = new Developer("Ankit", 80000);
const mgr = new Manager("Riya", 120000);

const printer = new DetailPrinter();
const bonus = new BonusGiver();

dev.accept(printer);   // Developer: Ankit, Salary: 80000
mgr.accept(printer);   // Manager: Riya, Salary: 120000

dev.accept(bonus);     // Ankit got bonus: 8000
mgr.accept(bonus);     // Riya got bonus: 24000