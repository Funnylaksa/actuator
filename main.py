def on_button_pressed_a():
    # fan on
    pins.digital_write_pin(DigitalPin.P1, 1)
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.show_icon(IconNames.HEART)
    basic.pause(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    # fan off
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.show_icon(IconNames.NO)
    basic.pause(100)
input.on_button_pressed(Button.B, on_button_pressed_b)

colorbit_51bit = None
w_moist = 10
w_weight = 2
w_temp = 3
w_humid = 4
w_wind = 5
w_heater = -2
x_moist = 10
x_weight = 2
x_temp = 3
x_humid = 4
x_wind = 5
x_heater = 20
radio.set_group(88)
radio.set_group(90)
OLED12864_I2C.init(60)

def on_forever2():
    global colorbit_51bit
    serial.write_line("rainbow light")
    colorbit_51bit = colorbit.init_color_bit(DigitalPin.P8, BitColorMode.RGB)
    basic.show_icon(IconNames.SMALL_DIAMOND)
    colorbit_51bit.show_color(colorbit.colors(BitColors.GREEN))
    basic.pause(500)
    colorbit_51bit.show_color(colorbit.colors(BitColors.BLUE))
    basic.pause(500)

basic.forever(on_forever2)