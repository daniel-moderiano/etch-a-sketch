
// Initialise all document variables

const grid = document.getElementById("grid");
const gridSquare = document.createElement("div");
const resetButton = document.querySelector(".button--reset");
const blackButton = document.querySelector(".button--black");
const colourButton = document.querySelector(".button--colour");
const gridButton = document.querySelector(".button--grid");
let gridSquaresClass;

// Function to clear the existing grid-container div of any child nodes to allow proper construction of a new grid.

function clearGridSquares() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastElementChild);
    }
}

// Function for creating a grid with x squares using user input, but set to default 16 x 16.

function drawGrid(numSquares = 16) {
    for (let i = 0; i < numSquares ** 2; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-item");
        grid.appendChild(gridSquare);
    }
    grid.style.cssText = `grid-template-columns: repeat(${numSquares}, 1fr); grid-template-rows: repeat(${numSquares}, 1fr)`;
}


// Event listener to add the coloured class to the grid-items, which changes their background colour to blue.

function addColourClass() {
    gridSquaresClass = Object.values(document.getElementsByClassName("grid-item"));
    gridSquaresClass.forEach(function(gridSquare) {
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.classList.add("grid-item--colour");
        });
    });
}

// Initial function to load a 16x16 grid.

function drawInitialGrid(numSquares) {
    drawGrid(numSquares)
    addColourClass();
}

drawInitialGrid(16);


// Event listener for reset button to remove coloured class from all grid-items, hence resetting all squares to white. 

function resetBoard() {
    gridSquaresClass.forEach(function(gridSquare) {
        gridSquare.classList.remove("grid-item--colour");
        gridSquare.style.removeProperty("background-color");
    });
}

resetButton.addEventListener('click', resetBoard);


// Function to change the number of squares in the grid with a user prompted number. Uses prior function to achieve this by clearing the grid, then re-drawing and adding colour funcitonality.

function changeGrid() {
    let numSquares = (prompt("Enter the number of squares"));    
    clearGridSquares();
    drawGrid(parseInt(numSquares));
    addColourClass(); 
}

gridButton.addEventListener('click', changeGrid);

// Function to add a random RGB 'brush' and connect this with the coloured button.

function randomColour() {
    return `rgb(${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)})`;
}

function randomRGB() {
    gridSquaresClass = Object.values(document.getElementsByClassName("grid-item"));
    gridSquaresClass.forEach(function(gridSquare) {
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.cssText = `background-color: ${randomColour()}`;
        });
    });
}

colourButton.addEventListener('click', () => {
    resetBoard();
    randomRGB();
});

// Function to return to standard black colouring with the "black" button

blackButton.addEventListener('click', () => {
    resetBoard();
    clearGridSquares();
    drawGrid(grid.style.cssText.substring(30, 32));
    addColourClass();
});


