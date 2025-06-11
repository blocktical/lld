from states.state_interface import State
from states.published_state import PublishedState

class ApprovedState(State):
    def handle(self, document):
        print("Document approved.")
        document.set_state(PublishedState())
