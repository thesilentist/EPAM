let tableBody = document.querySelector('tbody');
let addRowButton = document.querySelector('.addrow__button');
let canvas = document.querySelector('.diagram-canvas');
let someStartingData = [ 
	{'name' : 'Тернопільська', 'value' : 13824},
	{'name' : 'Чернігівська', 'value' : 31903},
	{'name' : 'Рівненська', 'value' : 20051},
	{'name' : 'Київська', 'value' : 28121},
	{'name' : 'Чернівецька', 'value' : 8096},
	{'name' : 'Львівська', 'value' : 21883},
	{'name' : 'Одеська', 'value' : 33314}
];

document.addEventListener('DOMContentLoaded', () => {
	someStartingData.forEach(( element ) => {
		addNewRow(tableBody,element.name,element.value);
	})
})

tableBody.addEventListener('DOMSubtreeModified', () => {
	redrawCanvas();
})

addRowButton.addEventListener('click',() => {
	addNewDefaultRow(tableBody);
});

function addNewDefaultRow (table) {
	let newRow = document.createElement('tr');

	let nameCell = newRow.appendChild(document.createElement('td'));
	nameCell.textContent = "Нова область";
	nameCell.className = "item__name";
	nameCell.setAttribute('contenteditable',"true");
	
	let valueCell = newRow.appendChild(document.createElement('td'))
	valueCell.textContent = "100";
	valueCell.className = "item__value";
	valueCell.setAttribute('contenteditable',"true");
	
	let deleteButton = newRow.appendChild(document.createElement('td'))
	deleteButton.textContent = 'Видалити';
	deleteButton.className = 'item__delete btn btn-link';
	deleteButton.addEventListener('click', () => { deleteButton.parentNode.remove(); });

	table.appendChild(newRow);
}

function addNewRow(table, name, value) {
	let newRow = document.createElement('tr');
	
	let nameCell = newRow.appendChild(document.createElement('td'));
	nameCell.textContent = name;
	nameCell.className = "item__name";
	nameCell.setAttribute('contenteditable',"true");
	
	let valueCell = newRow.appendChild(document.createElement('td'))
	valueCell.textContent = value;
	valueCell.className = "item__value";
	valueCell.setAttribute('contenteditable',"true");
	
	let deleteButton = newRow.appendChild(document.createElement('td'))
	deleteButton.textContent = 'Видалити';
	deleteButton.className = 'item__delete btn btn-link';
	deleteButton.addEventListener('click', () => { deleteButton.parentNode.remove(); });
	
	table.appendChild(newRow);
}

function redrawCanvas() {
	let names = document.getElementsByClassName('item__name');
	let values = document.getElementsByClassName('item__value');

	canvas.innerHTML = "";

	let maxValue = 1;
	for (let element of values){
		if (parseInt(element.innerText) > maxValue) maxValue = parseInt(element.innerText);
	}

	for (let element of values) {
		let newElement = document.createElement('div');
		newElement.className = "diagram-canvas__element";
		canvas.style.gridTemplateColumns = "repeat(" + values.length + "," + (600 - 5*(values.length - 1))/values.length + "px";
		newElement.style.height = parseInt(element.innerText) / maxValue * 100 + "%";
		newElement.addEventListener('mouseover', () => {
			newElement.innerText = element.innerText;
		})
		newElement.addEventListener('mouseout', () => {
			newElement.innerText = "";
		})
		canvas.appendChild(newElement);
	}
	for (let name of names) {
		let newName = document.createElement('div');
		newName.className = "diagram-canvas__name";
		newName.innerText = name.innerText;
		canvas.appendChild(newName);
	}
}



