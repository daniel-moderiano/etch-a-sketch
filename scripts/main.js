
const grid = document.querySelector(".grid-container");

const gridSquare = document.createElement("div");

let input = 16;

for (let i = 0; i < input ** 2; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-item");
    grid.appendChild(gridSquare);
}



