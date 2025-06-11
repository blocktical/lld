from states.state_interface import State

class PublishedState(State):
    def handle(self, document):
        print("Document is already published. No further action.")
