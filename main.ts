input.onGesture(Gesture.LogoUp, function () {
    list = randint(0, text_list.length - 1)
    basic.showString("" + (text_list[list]))
})
input.onGesture(Gesture.ScreenUp, function () {
    game.removeLife(1)
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
let list = 0
let text_list: string[] = []
text_list = ["dog ", "hog", "bog", "cog "]
game.startCountdown(30000)
