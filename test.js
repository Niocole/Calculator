//define answer element
const answer = document.getElementById("answer");
let currentVal = "0";
let result = 0;
let firstInput = "";
let isFirstInput = false;
let secondInput = "";
let isSecondInput = false;
const numbers = document.querySelectorAll(".numbers");

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", (e) => {
		let atr = e.target.getAttribute("value");
		if(isFirstInput === false) {
			getFirstInput(atr)
		}
		if(isSecondInput === false)
			getSecondInput(atr)
	})
}

function getFirstInput(element) {
	answer.innerHTML = "";
	firstInput += element;
	answer.innerHTML = firstInput;
	firstInput = +firstInput;
}

function getSecondInput(element) {
	if(firstInput != "" && operator != "")
		secondInput += element;
		answer.innerHTML = secondInput;
		secondInput = +secondInput;
}



