// jshint esversion:6

const container = document.querySelector(".gridContainer");

//create initial 16 by 16 grid
let gridNumber = 16;

function makeGrid(gridNumber) {
	container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
	for (let i = 0; i < gridNumber * gridNumber; i++) {
		const divs = document.createElement("div");
		divs.classList.add("divs");
		divs.style.display = "flex";
		divs.style.justifyContent = "center";
		divs.style.alignItems = "center";
		divs.style.border = "1px solid black";
		divs.style.borderRadius = "2px";
		container.appendChild(divs);
	}
}

makeGrid(gridNumber);
