/**
 * p0 green
 * 
 * p1 yellow
 * 
 * p2 red
 */
// Basic green yellow red command with a bonus flashing green light to take left turns.
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    _case = 1
    // checks if case is equal to 1
    if (_case == 1) {
        // while case is equal to 1 this task repeats
        while (_case == 1) {
            basic.clearScreen()
            // turns on green light
            pins.digitalWritePin(DigitalPin.P0, 1)
            // tells you to walk
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            // checks if case is still equal to 1
            if (!(_case == 1)) {
                break;
            }
            basic.pause(45000)
            if (!(_case == 1)) {
                break;
            }
            basic.clearScreen()
            // start of walking countdown
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
            // end of walking countdown
            basic.pause(500)
            basic.clearScreen()
            if (!(_case == 1)) {
                break;
            }
            // turns on yellow light
            pins.digitalWritePin(DigitalPin.P1, 1)
            // turns off green light
            pins.digitalWritePin(DigitalPin.P0, 0)
            // dont walk sign
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.pause(3000)
            if (!(_case == 1)) {
                break;
            }
            // turns of red light
            pins.digitalWritePin(DigitalPin.P2, 1)
            // turns off yellow light
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(42000)
            // turns of red light
            pins.digitalWritePin(DigitalPin.P2, 0)
            // flashing green light to signal left hand turn
            for (let index = 0; index < 14; index++) {
                // turns on green light
                pins.digitalWritePin(DigitalPin.P0, 1)
                basic.pause(700)
                // turns off green light
                pins.digitalWritePin(DigitalPin.P0, 0)
                basic.pause(700)
            }
            // turns on yellow light
            pins.digitalWritePin(DigitalPin.P1, 1)
            // turns off green light
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(3000)
            // turns on red light
            pins.digitalWritePin(DigitalPin.P2, 1)
            // turns off yellow light
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(42000)
            pins.digitalWritePin(DigitalPin.P2, 0)
            if (!(_case == 1)) {
                break;
            }
        }
    } else {
        // if somehow the case isnt 1 when this script is active this clears the screen and turns off all pins
        basic.clearScreen()
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
// restart button
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    _case = 0
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    _case = 2
    // repeatedly flashes yellow light until case does not equal 2
    while (_case == 2) {
        // turns on yellow light
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(700)
        // turns off yellow light
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(700)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    _case = 3
    // repeatedly flashes red light until case does not equal 3
    while (_case == 3) {
        // turns on red light
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(700)
        // turns off red light
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(700)
    }
})
// Sets variables to 0
let _case = 0
_case = 0
