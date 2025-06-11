from states.state_interface import State
from states.approved_state import ApprovedState

class ReviewedState(State):
    def handle(self, document):
        print("Document reviewed and ready for approval.")
        document.set_state(ApprovedState())
