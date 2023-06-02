let direction = 0
let distance = 0
DFRobotMaqueenPlusV2.init()
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, 160)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 140)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 120)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 100)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 80)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 60)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 40)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 30)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 60)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 80)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 100)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 120)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 140)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 160)
})
basic.forever(function () {
    distance = DFRobotMaqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
    direction = randint(1, 2)
    if (distance < 50 && distance != 0) {
        if (direction == 1) {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 255)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 0)
            basic.pause(1000)
        }
        if (direction == 2) {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 0)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 255)
            basic.pause(1000)
        }
    } else {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 255)
    }
})
