let image = document.getElementsByClassName('main__image')[0];
let widthInput = document.getElementById('widthInput');
let heightInput = document.getElementById('heightInput');
let borderWidthInput = document.getElementById('borderWidthInput');
let borderColorInput = document.getElementById('borderColorInput');
let altInput = document.getElementById('altInput');
let applyButton = document.getElementsByClassName('apply__button')[0];

widthInput.addEventListener('change',() => {
	if (widthInput.value > window.innerWidth || widthInput.value < 1) {
		widthInput.parentNode.style = 'border-color : #ff3333;';
		applyButton.disabled = true;
	} else {
		widthInput.parentNode.style = 'border-color : darkgray;';
		applyButton.disabled = false;
	}
});

heightInput.addEventListener('change',() => {
	if (heightInput.value > window.innerHeight || heightInput.value < 1) {
		heightInput.parentNode.style = 'border-color : #ff3333;';
		applyButton.disabled = true;	
	} else {
		heightInput.parentNode.style = 'border-color : darkgray;';
		applyButton.disabled = false;
	}
});

borderWidthInput.addEventListener('change',() => {
	if (borderWidthInput.value > 20 || borderWidthInput.value < 0) {
		borderWidthInput.parentNode.style = 'border-color : #ff3333;';
		applyButton.disabled = true;
	} else {
		borderWidthInput.parentNode.style = 'border-color : darkgray;';
		applyButton.disabled = false;
	}
});

borderColorInput.addEventListener('change',() => {
	if (isValidColor(borderColorInput.value)) {
		applyButton.disabled = false;
	} else {
		applyButton.disabled = true;
	}
});

altInput.addEventListener('change',() => {
	if (altInput.value.match(/^[a-zA-Z]+$/)) {
		altInput.parentNode.style = 'border-color : darkgray;';
		applyButton.disabled = false;
	} else {
		altInput.parentNode.style = 'border-color : #ff3333;';
		applyButton.disabled = true;
	}
});	



applyButton.addEventListener('click', () => {
	image.style.width = widthInput.value + "px";
	image.style.height = heightInput.value + "px";
	image.style.border = borderWidthInput.value + 'px solid ' + borderColorInput.value;
	image.alt = altInput.value;
});

function isValidColor(strColor) {
  var s = new Option().style;
  s.color = strColor;

  // return 'false' if color wasn't assigned
  return s.color == strColor.toLowerCase();
}


console.log(image);