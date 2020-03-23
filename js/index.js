// jshint esversion:6

const container = document.querySelector(".gridContainer");
const playSketch = document.querySelector("#sketch");
const playSnake = document.querySelector("#snake");

// Default Game on page load
let gridNumber = 16;

function defaultGame(gridNumber) {
	// create the grid squares
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

		//add the event listener
		for (let x = 0; x < document.querySelectorAll(".divs").length; x++) {
			document.querySelectorAll(".divs")[x].addEventListener("mouseover", function() {
				this.style.backgroundColor = "blue";
			});
		}
	}
}
defaultGame(gridNumber);

// Game 01 - Etch-a-Sketch

playSketch.addEventListener("click", function() {
	gridNumber = "";
	container.innerHTML = "";
	function sketchGame() {
		gridNumber = parseInt(prompt("Enter gridSquares: "));
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

			// Add the event listener
			for (let x = 0; x < document.querySelectorAll(".divs").length; x++){
				document.querySelectorAll(".divs")[x].addEventListener("mouseover", function(){
					this.style.backgroundColor = "green";
				});
			}
		}
	}
	sketchGame();
});
