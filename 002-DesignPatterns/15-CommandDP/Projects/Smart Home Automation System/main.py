from devices.light import Light
from devices.fan import Fan

from commands.light_on import LightOnCommand
from commands.light_off import LightOffCommand
from commands.fan_on import FanOnCommand
from commands.fan_off import FanOffCommand

from invoker import RemoteControl

def main():
    light = Light()
    fan = Fan()
    remote = RemoteControl()

    light_on = LightOnCommand(light)
    fan_on = FanOnCommand(fan)
    light_off = LightOffCommand(light)

    remote.press(light_on)   # 💡 Light turned ON
    remote.press(fan_on)     # 🌀 Fan turned ON
    remote.press(light_off)  # 💡 Light turned OFF

    remote.undo()  # Undo Light OFF → Light ON
    remote.undo()  # Undo Fan ON → Fan OFF
    remote.undo()  # Undo Light ON → Light OFF
    remote.undo()  # ❌ Nothing to undo.

if __name__ == "__main__":
    main()