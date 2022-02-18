let Sum = 0
input.onPinPressed(TouchPin.P0, function () {
    Sum += -0.01
})
input.onButtonPressed(Button.A, function () {
    Sum += 1
})
input.onButtonPressed(Button.AB, function () {
    Sum += 0.01
})
input.onButtonPressed(Button.B, function () {
    Sum += -1
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Sum)
})
