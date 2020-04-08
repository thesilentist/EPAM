// console.log("Task 3 connected");

let numberOfRows = document.getElementsByClassName('task3-input__number')[0];
let startButton = document.getElementsByClassName('task3-input__start')[0];
let task3Result = document.getElementsByClassName('task3-result')[0];

numberOfRows.addEventListener('change',() => {
	if (numberOfRows.value > 80) numberOfRows.value = 80;
	if (numberOfRows.value < 0) numberOfRows.value = 0;
});

startButton.addEventListener('click',() => {
	let bottlesRemaining = numberOfRows.value;
	task3Result.innerText ="";
	while (bottlesRemaining > 1) 
	{
		let newString = bottlesRemaining + " bottles are on the table, one felt and there'" + (bottlesRemaining != 1 ? 're still ' + (bottlesRemaining - 1) + ' bottles\n'  : 'is still 1 bottle\n'); 
		task3Result.innerText += newString;
		bottlesRemaining --;

	}
	bottlesRemaining == 0 ? task3Result.innerText = "This table is empty. Pandemic is cancelled" : task3Result.innerText += "1 bootle is on the table, it felt and ЖОДНОЇ!";
});