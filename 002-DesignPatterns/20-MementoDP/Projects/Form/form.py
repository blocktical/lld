class FormMemento:
    def __init__(self, state: dict):
        self._state = state.copy()

    def get_state(self):
        return self._state


class Form:
    def __init__(self):
        self.state = {}

    def fill_field(self, key, value):
        self.state[key] = value

    def show(self):
        print("Current Form State:", self.state)

    def save(self):
        return FormMemento(self.state)

    def restore(self, memento):
        self.state = memento.get_state()