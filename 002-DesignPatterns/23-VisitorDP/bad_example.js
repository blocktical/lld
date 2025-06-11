class Developer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    printDetails() {
        console.log(`Developer: ${this.name}, Salary: ${this.salary}`);
    }

    giveBonus() {
        console.log(`${this.name} received bonus of ${this.salary * 0.1}`);
    }
}

class Manager {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    printDetails() {
        console.log(`Manager: ${this.name}, Salary: ${this.salary}`);
    }

    giveBonus() {
        console.log(`${this.name} received bonus of ${this.salary * 0.2}`);
    }
}

// Now you want to add a new operation, say generate appraisal report.
// You'll have to modify both classes again => Tight Coupling

const dev = new Developer("Ankit", 80000);
const mgr = new Manager("Riya", 120000);

dev.printDetails();
dev.giveBonus();

mgr.printDetails();
mgr.giveBonus();