input.onButtonPressed(Button.A, function () {
    // fan on
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "OFF") {
        // fan off
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showIcon(IconNames.No)
        basic.pause(100)
    } else if (receivedString == "ON") {
        // fan on
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    // fan off
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showIcon(IconNames.No)
    basic.pause(100)
})
let colorbit_51bit: colorbit.Strip = null
radio.setGroup(60)
OLED12864_I2C.init(60)
// radio.on_received_value(on_received_value)
basic.forever(function () {
    serial.writeLine("rainbow light")
    colorbit_51bit = colorbit.initColorBit(DigitalPin.P8, BitColorMode.RGB)
    basic.showIcon(IconNames.SmallDiamond)
    colorbit_51bit.showColor(colorbit.colors(BitColors.Green))
    basic.pause(500)
    colorbit_51bit.showColor(colorbit.colors(BitColors.Blue))
    basic.pause(500)
})
