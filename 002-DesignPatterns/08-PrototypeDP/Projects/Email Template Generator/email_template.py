import copy

class EmailTemplate:
    def __init__(self, subject, body, recipient):
        self.subject = subject
        self.body = body
        self.recipient = recipient

    def clone(self):
        return copy.deepcopy(self)

    def send(self):
        print(f"[{self.subject}] to {self.recipient}:\n{self.body}\n")