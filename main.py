Sum = 0

def on_button_pressed_a():
    global Sum
    Sum += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_number(Sum)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Sum
    Sum += 0.01
input.on_button_pressed(Button.B, on_button_pressed_b)

