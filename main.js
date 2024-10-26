'use strict'

function onBallClick(ball, maxDiameter) {
    if (ball.classList.contains('ball4')) {
        reduceDiameters()
    } else if (ball.classList.contains('ball3')) {
        swapBalls()
    } else if (ball.classList.contains(".ball5")) {
        changeBackgroundColor()
    } else {
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
}

function swapBalls() {
    const ball1 = document.querySelector('.ball1')
    const ball2 = document.querySelector('.ball2')

    //Get current sizes and colors
    const ball1Size = ball1.style.width
    const ball1Color = ball1.style.backgroundColor
    const ball2Size = ball2.style.width
    const ball2Color = ball2.style.backgroundColor

    //Swap sizes
    ball1.style.width = ball2Size
    ball1.style.height = ball2Size
    ball2.style.width = ball1Size
    ball2.style.height = ball1Size

    //Swap colors
    ball1.style.backgroundColor = ball2Color
    ball2.style.backgroundColor = ball1Color

    //Update text content to show new sizes
    ball1.textContent = ball2Size || "100px"
    ball2.textContent = ball1Size || "100px"
}

function reduceDiameters() {
    const ball1 = document.querySelector('.ball1')
    const ball2 = document.querySelector('.ball2')

    const currentWidth1 = parseInt(ball1.style.width) || 100
    const currentWidth2 = parseInt(ball2.style.width) || 100

    //Calculate new sizes 
    const reduceAmount1 = getRandomInt(20, 60)
    const reduceAmount2 = getRandomInt(20, 60)

    const newWidth1 = Math.max(currentWidth1 - reduceAmount1, 100)
    const newWidth2 = Math.max(currentWidth2 - reduceAmount2, 100)

    //Update the balls sizes
    ball1.style.width = newWidth1 + "px"
    ball1.style.height = newWidth1 + "px"
    ball2.style.width = newWidth2 + "px"
    ball2.style.height = newWidth2 + "px"

    //Update text content
    ball1.textContent = newWidth1 + "px"
    ball2.textContent = newWidth2 + "px"


}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor()
}