'use strict'

function onBallClick(ball, maxDiameter) {
    var currentWidth = parseInt(ball.style.width) || 100
    var newDiameter = currentWidth + getRandomInt(20, 60)

    if (newDiameter > maxDiameter) {
        newDiameter = 100
    }

    ball.style.width = newDiameter + "px"
    ball.style.height = newDiameter + "px"
    ball.textContent = newDiameter + "px"
    ball.style.backgroundColor = getRandomColor()
}