from states.draft_state import DraftState

class Document:
    def __init__(self):
        self.state = DraftState()

    def set_state(self, new_state):
        self.state = new_state

    def proceed(self):
        self.state.handle(self)
