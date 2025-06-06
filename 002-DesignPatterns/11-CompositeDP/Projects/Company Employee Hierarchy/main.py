
from employee import Manager, IndividualContributor

# Employees
dev1 = IndividualContributor("Dev A", 50000)
dev2 = IndividualContributor("Dev B", 60000)
designer1 = IndividualContributor("Designer X", 55000)

# Managers
manager1 = Manager("Manager 1", 80000)
manager1.add(dev1)
manager1.add(designer1)

manager2 = Manager("Manager 2", 85000)
manager2.add(dev2)

# CEO
ceo = Manager("CEO", 150000)
ceo.add(manager1)
ceo.add(manager2)

# Display structure and total salary
ceo.show_structure()
print(f"\n💰 Total Salary Expense: ${ceo.get_salary()}")
