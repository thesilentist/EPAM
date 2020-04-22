// console.log("Task 2 connected");

let inputNumber = document.getElementsByClassName("task2-input__number")[0];
let inputRange = document.getElementsByClassName("task2-input__range")[0];
let clearButton = document.getElementsByClassName("task2-input__clear")[0];
let buildButton = document.getElementsByClassName("task2-input__build")[0];
let result = document.getElementsByClassName("task2-result")[0];

inputNumber.addEventListener("change",() => {
	if (inputNumber.value > 15) inputNumber.value =15;
	inputRange.value = inputNumber.value;
});

inputRange.addEventListener("input",() => {
	inputNumber.value = inputRange.value;
});

clearButton.addEventListener("click",()=> {
	result.innerText = "";
});

buildButton.addEventListener("click",() =>{
	let prevRow = null;
	let resultString = "";
	for(let i =0; i < inputNumber.value; i++)
	{
		prevRow = createNewRow(prevRow);
		resultString +=createNewString(prevRow);
	}
	result.innerText = resultString;
});

function createNewRow(prevRow){
	let newRow = [1];
	if (prevRow != null)
	{
		for (let i =0; i < prevRow.length - 1; i++)
		{
			let currentNumber = prevRow[i];
			let nextNumber = prevRow[i+1];
			newRow.push(currentNumber + nextNumber);
		}
		newRow.push(1);
	}
	return newRow;
}

function createNewString(row){
	let string = "";
	for(let number of row)
	{
		string+="   ";
		string+=number;
	}
	string = string.substring(2);
	string+="\n";
	return string;
}