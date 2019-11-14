var boxes = 16;

const innerContainer = document.querySelector("#innerContainer");


createBoxes();

function createBoxes() {
    // Sets the grid size.
    innerContainer.style.gridTemplateColumns = "repeat(" + (boxes) + ", 1fr)";
    innerContainer.style.gridTemplateRows = "repeat(" + (boxes) + ", 1fr)";

    // Creates the appropriate number of boxes based on grid size.
    for (i = 0; i < boxes*boxes; i++) {
        const newBox = document.createElement("div");
        newBox.setAttribute("id", "pixelBox");
        innerContainer.appendChild(newBox);
        newBox.addEventListener("mouseover", (e) => {
            newBox.style.backgroundColor = "black";
        });
    }
    resetColor();
    resizeGrid();
}

// Sets all box colors back to white.
function resetColor() {
    const reset = document.querySelector("#reset");
    reset.addEventListener("click", (e) => {
        const allBoxes = document.querySelectorAll("#pixelBox");
        allBoxes.forEach((allBoxes) => {
        allBoxes.style.backgroundColor = "white";
        });
    });
}

// Changes the size of the grid.
function resizeGrid() {
    const resize = document.querySelector("#resize");
    resize.addEventListener("click", (e) => {
        var boxes = prompt("How many boxes?");
        
        // Removes the old grid so that a new one can be populated.
        innerContainer.querySelectorAll("*").forEach(n => n.remove());
        
        innerContainer.style.gridTemplateColumns = "repeat(" + (boxes) + ", 1fr)";
        innerContainer.style.gridTemplateRows = "repeat(" + (boxes) + ", 1fr)";

        for (i = 0; i < boxes*boxes; i++) {
            const newBox = document.createElement("div");
            newBox.setAttribute("id", "pixelBox");
            innerContainer.appendChild(newBox);
            newBox.addEventListener("mouseover", (e) => {
                newBox.style.backgroundColor = "black";
            });
        }
    });
}