input.onButtonPressed(Button.A, function () {
    // fan on
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    // fan off
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showIcon(IconNames.No)
    basic.pause(100)
})
let colorbit_51bit: colorbit.Strip = null
let w_moist = 10
let w_weight = 2
let w_temp = 3
let w_humid = 4
let w_wind = 5
let w_heater = -2
let x_moist = 10
let x_weight = 2
let x_temp = 3
let x_humid = 4
let x_wind = 5
let x_heater = 20
radio.setGroup(88)
radio.setGroup(90)
OLED12864_I2C.init(60)
basic.forever(function () {
    serial.writeLine("rainbow light")
    colorbit_51bit = colorbit.initColorBit(DigitalPin.P8, BitColorMode.RGB)
    basic.showIcon(IconNames.SmallDiamond)
    colorbit_51bit.showColor(colorbit.colors(BitColors.Green))
    basic.pause(500)
    colorbit_51bit.showColor(colorbit.colors(BitColors.Blue))
    basic.pause(500)
})
