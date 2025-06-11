from form import Form
from caretaker import Caretaker

form = Form()
history = Caretaker()

form.fill_field("name", "Tanuj")
history.save(form.save())

form.fill_field("email", "tanuj@example.com")
history.save(form.save())

form.fill_field("phone", "9999999999")
form.show()

print("\nUser pressed Undo...\n")
form.restore(history.undo())
form.show()

print("\nUser pressed Undo again...\n")
form.restore(history.undo())
form.show()