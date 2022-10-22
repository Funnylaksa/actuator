input.onButtonPressed(Button.A, function () {
    // fan on
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    colorbit_51bit.showColor(colorbit.colors(BitColors.Green))
    serial.writeString("fan on")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "OFF") {
        // fan off
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showIcon(IconNames.No)
        basic.pause(500)
        colorbit_51bit.showColor(colorbit.colors(BitColors.Black))
    } else if (receivedString == "ON") {
        // fan on
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        colorbit_51bit.showColor(colorbit.colors(BitColors.Green))
    }
})
input.onButtonPressed(Button.B, function () {
    // fan off
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showIcon(IconNames.No)
    basic.pause(500)
    colorbit_51bit.showColor(colorbit.colors(BitColors.Black))
    serial.writeString("fan off")
})
let x_wind = 0
let x_weight = 0
let colorbit_51bit: colorbit.Strip = null
radio.setGroup(60)
OLED12864_I2C.init(60)
colorbit_51bit = colorbit.initColorBit(DigitalPin.P8, BitColorMode.RGB)
colorbit_51bit.showColor(colorbit.colors(BitColors.White))
basic.showIcon(IconNames.SmallDiamond)
basic.forever(function () {
    let x_humid = Math.random()
x_weight = Math.random() * 10
    x_wind = Math.random() * 5
    basic.pause(100)
    serial.writeValue("x_weight", x_weight)
    basic.pause(100)
    serial.writeValue("x_wind", x_wind)
    basic.pause(100)
    serial.writeValue("x_humid", x_humid)
})
