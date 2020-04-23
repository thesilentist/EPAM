const image = document.getElementsByClassName('main__image')[0];
const widthInput = document.getElementById('widthInput');
const heightInput = document.getElementById('heightInput');
const borderWidthInput = document.getElementById('borderWidthInput');
const borderColorInput = document.getElementById('borderColorInput');
const altInput = document.getElementById('altInput');
const applyButton = document.getElementsByClassName('apply__button')[0];
const stringTemplate = /^[a-zA-Z]+$/;
const numberTemplate =  /^[0-9]+$/;

widthInput.addEventListener('change',() => {
	checkNumberInput(widthInput,1,window.innerWidth);
});

heightInput.addEventListener('change',() => {
	checkNumberInput(heightInput,1,window.innerHeight);
});

borderWidthInput.addEventListener('change',() => {
	checkNumberInput(borderWidthInput,0,20);
});

borderColorInput.addEventListener('change',() => {
	if (isValidColor(borderColorInput.value)) {
		validInput(borderColorInput);
	} else {
		invalidInput(borderColorInput);
	}
});

altInput.addEventListener('change',() => {
	if (altInput.value.match(stringTemplate)) {
		validInput(altInput);
	} else {
		invalidInput(altInput);
	}
});	



applyButton.addEventListener('click', () => {
	image.style.width = `${widthInput.value}px`;
	image.style.height = `${heightInput.value}px`;
	image.style.border = `${borderWidthInput.value}px solid ${borderColorInput.value}`;
	image.alt = altInput.value;
});

function isValidColor(strColor) {
	let s = new Option().style;
	s.color = strColor;
	return s.color == strColor.toLowerCase();
}

function checkNumberInput(input, minValue, maxValue) {
	if (input.value.match(numberTemplate) && input.value <= maxValue && input.value >= minValue) {
		validInput(input);
	} else {
		invalidInput(input);
	}
}

function invalidInput(input) {
	input.parentNode.style = 'border-color : #ff3333;';
	applyButton.disabled = true;
}

function validInput(input) {
	input.parentNode.style = 'border-color : darkgray;';
	applyButton.disabled = false;
}