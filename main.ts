input.onButtonPressed(Button.A, function () {
    basic.showNumber(Numero)
    Numero += 1
})
input.onButtonPressed(Button.AB, function () {
    Texto1 = "Lindo día"
})
input.onButtonPressed(Button.B, function () {
    Numero += -1
    basic.showNumber(Numero)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(Texto1)
})
let Numero = 0
let Texto1 = ""
Texto1 = "Hola"
Numero = 15
