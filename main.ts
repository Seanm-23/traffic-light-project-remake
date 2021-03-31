/**
 * p0 green
 * 
 * p1 yellow
 * 
 * p2 red
 */
// up arrow means walk, count down means the light is going to change to red soon and x means don't walk.
input.onButtonPressed(Button.A, function () {
    _case = 1
    while (_case == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(30000)
        basic.clearScreen()
        basic.showNumber(9)
        basic.pause(500)
        basic.showNumber(8)
        basic.pause(500)
        basic.showNumber(7)
        basic.pause(500)
        basic.showNumber(6)
        basic.pause(500)
        basic.showNumber(5)
        basic.pause(500)
        basic.showNumber(4)
        basic.pause(500)
        basic.showNumber(3)
        basic.pause(500)
        basic.showNumber(2)
        basic.pause(500)
        basic.showNumber(1)
        basic.pause(500)
        basic.clearScreen()
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(27000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    _case = 0
})
input.onButtonPressed(Button.B, function () {
    _case = 2
    while (_case == 2) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(700)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(700)
    }
})
let _case = 0
let case_select = 0
_case = 0
