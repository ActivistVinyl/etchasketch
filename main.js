var boxes = 16;

const innerContainer = document.querySelector("#innerContainer");
innerContainer.style.gridTemplateColumns = "repeat(" + (boxes) + ", 1fr)";
innerContainer.style.gridTemplateRows = "repeat(" + (boxes) + ", 1fr)";

createBoxes();

function createBoxes() {
    for (i = 0; i < boxes*boxes; i++) {
        const newBox = document.createElement("div");
        newBox.setAttribute("class", "pixelBox");
        innerContainer.appendChild(newBox);
    }
    listener();
}

function listener() {
    const mouseOver = document.querySelector("#pixelBox");
    mouseOver.addEventListener("mouseover", (e) => {
        alert("pizza");
    });
}