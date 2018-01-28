
const container = document.querySelector('#container');

let cellColor = "black";
var cellNumber = 16*16;

createGrid();

function createGrid(){
	deleteGrid();
    cellNumber = prompt("Cells per Line", "16");
    var cellSize = Math.round(416/cellNumber);

	for (i=0; i<cellNumber*cellNumber; i++){
		const cell = document.createElement('div');
		cell.style.width = (cellSize+'px');
		cell.style.height = (cellSize+'px');

		cell.classList.add('cell');
		cell.addEventListener('mouseover', function (e){
			e.target.style.backgroundColor = cellColor;
		});
		container.appendChild(cell);
	}
}

function deleteGrid(){
	for(i = 0; i<cellNumber*cellNumber; i++){
		while (container.firstChild){
			container.removeChild(container.firstChild);
		}
	}
}