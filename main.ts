let Sum = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    Sum += 1
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showNumber(Sum)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    Sum += 0.01
})
