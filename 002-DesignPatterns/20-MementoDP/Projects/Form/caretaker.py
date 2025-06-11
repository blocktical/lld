class Caretaker:
    def __init__(self):
        self.history = []

    def save(self, memento):
        self.history.append(memento)

    def undo(self):
        if not self.history:
            return None
        return self.history.pop()