from states.state_interface import State
from states.submitted_state import SubmittedState

class DraftState(State):
    def handle(self, document):
        print("Document is being drafted...")
        document.set_state(SubmittedState())
