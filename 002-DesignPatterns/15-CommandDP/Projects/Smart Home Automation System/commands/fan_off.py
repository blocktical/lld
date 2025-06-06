from commands.command import Command

class FanOffCommand(Command):
    def __init__(self, fan):
        self.fan = fan

    def execute(self):
        self.fan.off()

    def undo(self):
        self.fan.on()