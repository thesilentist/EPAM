let task4SumButton = document.getElementsByClassName('task4-sum__button')[0];
let task4EurButton = document.getElementsByClassName('task4-eur__button')[0];
let task4SumResult = document.getElementsByClassName('task4-sum__result')[0];
let task4EurResult = document.getElementsByClassName('task4-eur__result')[0];

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
	let sum = 0;
	for (let item of arr)
	{
		if (item.type === 'USD' && item.value < 100) sum += item.value; 
	}
	task4SumResult.innerText = sum;
	return sum;
});

task4EurButton.addEventListener('click',() => {
	task4EurResult.innerText = "[";
	let eur = [];
	for (let item of arr)
	{
		if (item.type === 'EUR') 
		{
			item.value = item.value * 2;
			eur.push(item);
			task4EurResult.innerText += '{value: ' + item.value + ", type: '" + item.type + "'},";
		}
	}
	task4EurResult.innerText += "]";
	return eur;
});