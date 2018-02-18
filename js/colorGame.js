var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function() {
    //Generate new colors
    colors = generateRandomColors(6);
    //Pick new random color from arr
    pickedColor = pickColor();
    //Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //Change colors of squares on page
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#5e5e5e";
    this.textContent = "New Colors";
});

for (var i = 0; i < squares.length; i++) {
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

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
            this.style.backgroundColor = "#5e5e5e";
            messageDisplay.textContent = "Try again!";
        }
    });
}

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
