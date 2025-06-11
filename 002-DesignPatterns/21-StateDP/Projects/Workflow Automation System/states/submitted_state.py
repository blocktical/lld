from states.state_interface import State
from states.reviewed_state import ReviewedState

class SubmittedState(State):
    def handle(self, document):
        print("Document submitted for review.")
        document.set_state(ReviewedState())
