// console.log("Task 1 connected");

let childrenNum = [1,2,3,4,5,6];
let husbandName = ["Patrick","Wayne","Bob","Harry","James","Daniel","Serge"];
let wifeName = ["Sendy","Perl","Lilly","Keira","Reese","Kate","Lisa"];
let cities = ["New York","Kropyvnyts'kyi","Chortkiv","Kyiv","Romashivka","Lviv","Krakiw","Praha","Chernivtsi","Tokio"];
let professions = ["Developer", "Accountant","Janitor","Executive Director","Lab technician","Singer","Dancer","Interpreter","Referee","Judge","Teacher","Lawyer","Ambassador"];

const startGameButton = document.getElementsByClassName('task1-start').item(0);

startGameButton.addEventListener("click",()=>{
	if (document.getElementById("typeF").checked)
	{
		if(document.getElementById("genderF").checked)
		{
			familyPrediction(husbandName);
		} else if (document.getElementById("genderM").checked)
		{
			familyPrediction(wifeName);
		} else {
			familyPrediction(husbandName.concat(wifeName));
		}
	}
	else
	{
		careerPrediction();
	}
})

function familyPrediction(coupleNames)
{
	let coupleName = null;
	let childrenNumber = null;
	console.log(coupleNames);
	if(confirm("Do you want to enter name of your couple?"))
	{
		coupleName = prompt("Please, enter name:","");
		childrenNumber = childrenPrediction();
	} else
	{
		for(let name of coupleNames)
			{
				if (confirm("How about marrying "+ name + "?"))
				{
					coupleName = name;
					break;
				} 
			}
		childrenNumber = childrenPrediction();	
	}

	if (childrenNumber == null || coupleName == null)
	{
		alert("You are too picky. Let start from beginning");
		familyPrediction(coupleNames);
	} else 
	{
		alert("Ви укладете шлюб з " + coupleName + " та у вас буде " + childrenNumber + " дітей");
	}
}

function childrenPrediction()
{
	let childrenNumber = null;
	if (confirm("Are you childfree?")){
			childrenNumber = 0;
		} else {
			for(let num of childrenNum)
			{
				if (confirm("Do you want "+ num + " children?"))
				{
					childrenNumber = num;
					return childrenNumber;
				}
			}
		}	
	return childrenNumber;
}

function careerPrediction()
{
	let predictedCity = null;
	let predictedProfession = null;
	for (let city of cities)
	{
		if(confirm("Do you want to live in " + city+"?"))
		{
			predictedCity = city;
			break;
		}
	}
	for (let profession of professions)
	{
		if(confirm("Do you want to be a " + profession+"?"))
		{
			predictedProfession = profession;
			break;
		}
	}
	if (predictedCity == null || predictedProfession == null)
	{
		alert("You are too picky. Let start from beginning");
		careerPrediction();
	} else 
	{
		alert("Ви переїдете у місто " + predictedCity + " на посаду " + predictedProfession);
	}
}
