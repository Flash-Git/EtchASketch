
const container = document.querySelector('#container');

let cellColor = "black";
let cellNumber = 16*16;

createGrid();

function createGrid(){
	deleteGrid();
	for (i=0; i<cellNumber; i++){
		const cell = document.createElement('div');

		cell.classList.add('cell');
		cell.addEventListener('mouseover', function (e){
			e.target.style.backgroundColor = cellColor;
		});
		container.appendChild(cell);
	}
}

function deleteGrid(){
	for(i = 0; i<cellNumber; i++){
		while (container.firstChild){
			container.removeChild(container.firstChild);
		}
	}
}