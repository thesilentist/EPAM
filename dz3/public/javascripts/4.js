let task4SumButton = document.getElementsByClassName('task4-sum__button')[0];
let task4EurButton = document.getElementsByClassName('task4-eur__button')[0];
let task4SumResult = document.getElementsByClassName('task4-sum__result')[0];
let task4EurResult = document.getElementsByClassName('task4-eur__result')[0];

const sum = (accumulator, currentValue) => accumulator + currentValue.value;
let arr = [
	{value: 100, type: 'USD'},
	{value: 215, type: 'EUR'},
	{value: 7, type: 'EUR'},
	{value: 99, type: 'USD'},
	{value: 354, type: 'USD'},
	{value: 12, type: 'EUR'},
	{value: 77, type: 'USD'},
];

task4SumButton.addEventListener('click',() => {
	task4SumResult.innerText = arr.filter(item => item.type == 'USD' && item.value < 100).reduce(sum,0);
	return task4SumResult.innerText;
});

task4EurButton.addEventListener('click',() => {
	task4EurResult.innerText = "[";
	let eur = arr.filter(item => item.type == 'EUR');
	for (euro of eur)
	{
		euro.value = euro.value * 2;
		task4EurResult.innerText += '{value: ' + euro.value + ", type: '" + euro.type + "'},";
	}
	task4EurResult.innerText += "]";
	return eur;
});

	
