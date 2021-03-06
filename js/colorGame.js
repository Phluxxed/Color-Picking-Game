var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

init();

function init() {
    //Mode buttons event listener
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //Add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of picked square
            var clickedColor = this.style.backgroundColor;
            //compare color to picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again!";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    //Pick new random color from arr
    pickedColor = pickColor();
    //Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //Change colors of squares on page
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }

    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
    reset();
});

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < colors.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

function generateRandomColors(num) {
    //Make an array
    var arr = [];
    //Repeat num times
    for (var i = 0; i < num; i++) {
        //Get random color and push into colors
        arr.push(randomColor());
    }
    //Return array at end
    return arr;
}

function randomColor() {
    //Pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //Pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //Pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
