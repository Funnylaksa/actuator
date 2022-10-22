def on_button_pressed_a():
    # fan on
    pins.digital_write_pin(DigitalPin.P1, 1)
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.show_icon(IconNames.HEART)
    basic.pause(500)
    colorbit_51bit.show_color(colorbit.colors(BitColors.GREEN))
    serial.write_string("fan on")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    if receivedString == "OFF":
        # fan off
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 0)
        basic.show_icon(IconNames.NO)
        basic.pause(500)
        colorbit_51bit.show_color(colorbit.colors(BitColors.BLACK))
    elif receivedString == "ON":
        # fan on
        pins.digital_write_pin(DigitalPin.P1, 1)
        pins.digital_write_pin(DigitalPin.P2, 0)
        basic.show_icon(IconNames.HEART)
        basic.pause(500)
        colorbit_51bit.show_color(colorbit.colors(BitColors.GREEN))
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    # fan off
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.show_icon(IconNames.NO)
    basic.pause(500)
    colorbit_51bit.show_color(colorbit.colors(BitColors.BLACK))
    serial.write_string("fan off")
input.on_button_pressed(Button.B, on_button_pressed_b)

x_wind = 0
x_weight = 0
colorbit_51bit: colorbit.Strip = None
radio.set_group(60)
OLED12864_I2C.init(60)
colorbit_51bit = colorbit.init_color_bit(DigitalPin.P8, BitColorMode.RGB)
colorbit_51bit.show_color(colorbit.colors(BitColors.WHITE))
basic.show_icon(IconNames.SMALL_DIAMOND)

def on_forever():
    global x_weight, x_wind
    x_humid = Math.randomRange(30, 50)
    x_weight = Math.randomRange(80, 200)
    x_wind = Math.randomRange(0, 2)
    basic.pause(500)
    serial.write_value("x_weight", x_weight)
    basic.pause(500)
    serial.write_value("x_wind", x_wind)
    basic.pause(500)
    serial.write_value("x_humid", x_humid)
basic.forever(on_forever)
