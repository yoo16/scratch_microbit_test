let led2 = 0
input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.East)
})
basic.forever(function () {
    led2 = input.lightLevel()
    if (input.lightLevel() < 100) {
        basic.showString("" + (led2))
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
