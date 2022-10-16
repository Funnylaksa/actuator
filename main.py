def on_button_pressed_a():
    # fan on
    pins.digital_write_pin(DigitalPin.P1, 1)
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.show_icon(IconNames.HEART)
    basic.pause(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    if receivedString == "OFF":
        # fan off
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 0)
        basic.show_icon(IconNames.NO)
        basic.pause(100)
    elif receivedString == "ON":
        # fan on
        pins.digital_write_pin(DigitalPin.P1, 1)
        pins.digital_write_pin(DigitalPin.P2, 0)
        basic.show_icon(IconNames.HEART)
        basic.pause(100)
    else:
        pass
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    # fan off
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.show_icon(IconNames.NO)
    basic.pause(100)
input.on_button_pressed(Button.B, on_button_pressed_b)

colorbit_51bit: colorbit.Strip = None
radio.set_group(60)
OLED12864_I2C.init(60)
# radio.on_received_value(on_received_value)

def on_forever():
    global colorbit_51bit
    serial.write_line("rainbow light")
    colorbit_51bit = colorbit.init_color_bit(DigitalPin.P8, BitColorMode.RGB)
    basic.show_icon(IconNames.SMALL_DIAMOND)
    colorbit_51bit.show_color(colorbit.colors(BitColors.GREEN))
    basic.pause(500)
    colorbit_51bit.show_color(colorbit.colors(BitColors.BLUE))
    basic.pause(500)
basic.forever(on_forever)
