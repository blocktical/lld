classDiagram

class Command {
    <<interface>>
    +execute()
    +undo()
}

class Light {
    +on()
    +off()
}

class Fan {
    +on()
    +off()
}

class LightOnCommand {
    +execute()
    +undo()
}

class LightOffCommand {
    +execute()
    +undo()
}

class FanOnCommand {
    +execute()
    +undo()
}

class FanOffCommand {
    +execute()
    +undo()
}

class RemoteControl {
    -history : List~Command~
    +press(cmd: Command)
    +undo()
}

Command <|.. LightOnCommand
Command <|.. LightOffCommand
Command <|.. FanOnCommand
Command <|.. FanOffCommand

LightOnCommand --> Light
LightOffCommand --> Light
FanOnCommand --> Fan
FanOffCommand --> Fan

RemoteControl --> Command
