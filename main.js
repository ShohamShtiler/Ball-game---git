'use strict'

function onBallClick() {
    const ball = document.querySelector(".ball")
    
    var currentWidth = parseInt(ball.style.width) || 100
    var newDiameter = currentWidth + getRandomInt(20, 60)
    
    if (newDiameter > 400) {
        newDiameter = 100
    }

    ball.style.width = newDiameter + "px"
    ball.style.height = newDiameter + "px"
    ball.textContent = newDiameter + "px"
    ball.style.backgroundColor = getRandomColor()
}