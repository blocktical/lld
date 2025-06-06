class RemoteControl:
    def __init__(self):
        self.history = []

    def press(self, command):
        command.execute()
        self.history.append(command)

    def undo(self):
        if self.history:
            cmd = self.history.pop()
            print("↩️ Undoing last command...")
            cmd.undo()
        else:
            print("❌ Nothing to undo.")