// Select color input
var colorPicker = document.getElementById("colorPicker");

// Select size input
var sizePicker = document.getElementById("sizePicker");

// When grid size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});


function makeGrid() {
	// Select design canvas
	var pixelCanvas = document.getElementById("pixelCanvas");

	// Reset the current table (in case someone played it before)
	pixelCanvas.innerHTML = '';

	//get the user's inputs 
	const gridHeight = document.getElementById("inputHeight").value;
  	const gridWidth = document.getElementById("inputWidth").value;

	//draw a grid table using the input sizes and make each cell listen to clicks
	for (let i = 0; i < gridHeight; i++){
		let gridRow = pixelCanvas.insertRow(i);

		for (let j = 0; j < gridWidth; j++){
			let gridCell = gridRow.insertCell(j);
		
			//when the user clicks on the cell, change the cell's color to the selected color
			gridCell.addEventListener("click", function(event){
				gridCell.style.backgroundColor = colorPicker.value;
			});
		}
	}
}
