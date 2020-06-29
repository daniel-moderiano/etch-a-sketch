
// Initialise all document variables

const grid = document.getElementById("grid");
const gridSquare = document.createElement("div");
const resetButton = document.querySelector(".button--reset");
const eraserButton = document.querySelector(".button--eraser");
const colourButton = document.querySelector(".button--colour");
const gridButton = document.querySelector(".button--grid");

let gridSquaresClass;



// Function for creating a grid with x squares using user input, but set to default 16 x 16.
// TODO: must have drawGrid function alter the CSS styling for grid div to reflect proper fractions, including a function to calculate the appropriate fraction to allow all squares to fit.

function drawGrid (numSquares = 16) {
    for (let i = 0; i < numSquares ** 2; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-item");
        grid.appendChild(gridSquare);
    }
    grid.style.cssText = `grid-template-columns: repeat(${numSquares}, 1fr)`
    gridSquaresClass = Object.values(document.getElementsByClassName("grid-item"));
}

drawGrid();

// TODO: need to work this selector to become a live updated list, otherwise the new grid does not work properly.



gridSquaresClass.forEach(function(gridSquare) {
    gridSquare.addEventListener('mouseover', function (e) {
        gridSquare.classList.add("grid-item--colour");
    });
});



// Event listener to add the coloured class to the grid-items, which changes their background colour to blue.

// const gridSquares = document.querySelectorAll(".grid-item");

// gridSquares.forEach(function(gridSquare) {
//     gridSquare.addEventListener('mouseover', function (e) {
//         gridSquare.classList.add("grid-item--colour");
//     });
// });

// Event listener for reset button to remove coloured class from all grid-items, hence resetting all squares to white. 


resetButton.addEventListener('click', function (e) {
    gridSquaresClass.forEach(function(gridSquare) {
        gridSquare.classList.remove("grid-item--colour");
    });
});

// TODO convert input variable to interactive user input, but activate only on clicking change grid button.

gridButton.addEventListener('click', function (e) {
    let numSquares = parseInt(prompt("Enter the number of squares"));
    drawGrid(numSquares);
});
