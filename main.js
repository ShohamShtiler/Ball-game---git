'use strict'

function onBallClick() {
    const ball = document.querySelector(".ball")

    var currentWidth = parseInt(ball.style.width) || 100

    var newDiameter = currentWidth + 50
    ball.style.width = newDiameter + "px"
    ball.style.height = newDiameter + "px"

    ball.textContent = newDiameter + "px"
}