input.onButtonPressed(Button.A, function () {
    // fan on
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
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
    basic.pause(100)
    colorbit_51bit.showColor(colorbit.colors(BitColors.Black))
    serial.writeString("fan off")
    serial.writeValue("x_humid", x_humid)
    basic.pause(100)
    serial.writeValue("x_light", x_light)
    basic.pause(100)
    serial.writeValue("x_moist", x_moist)
    basic.pause(100)
    serial.writeValue("x_wind", x_wind)
    basic.pause(100)
    serial.writeValue("x_temp", x_temp)
    basic.pause(100)
    serial.writeValue("x_weight", x_weight)
})
radio.onReceivedValue(function (name, value) {
    if (name == "humi") {
        x_humid = value
        serial.writeValue("x_humid", x_humid)
    } else if (name == "light") {
        x_light = value
        serial.writeValue("x_light", x_light)
    } else if (name == "mois") {
        x_moist = value
        serial.writeValue("x_moist", x_moist)
    } else if (name == "winds") {
        x_wind = value
        serial.writeValue("x_wind", x_wind)
    } else if (name == "temp") {
        x_temp = value
        serial.writeValue("x_temp", x_temp)
    } else if (name == "weight") {
        x_weight = value
        serial.writeValue("x_weight", x_weight)
    }
})
let x_weight = 0
let x_temp = 0
let x_wind = 0
let x_moist = 0
let x_light = 0
let x_humid = 0
let colorbit_51bit: colorbit.Strip = null
radio.setGroup(60)
OLED12864_I2C.init(60)
colorbit_51bit = colorbit.initColorBit(DigitalPin.P8, BitColorMode.RGB)
colorbit_51bit.showColor(colorbit.colors(BitColors.White))
basic.showIcon(IconNames.SmallDiamond)
basic.forever(function () {
    basic.pause(500)
})
