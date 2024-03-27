//define answer element
const answer = document.getElementById("answer");
let currentVal = "0";
let result = 0;
let firstInput = "";
let isFirstInput = false;
let secondInput = "";
let isSecondInput = false;
const operator = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".numbers");
const equal = document.getElementById("equals");
const clear = document.getElementById("clear-all");
const percent = document.getElementById("percent");
const PosNegChg = document.getElementById("postitive-negative-change");

for(let i = 0;i < numbers.length; i++) {
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

function getOperator() {
	for(let i = 0; i < operator.length; i++) {
		operator[i].addEventListener("click", (e) => {
			operator = e.target.getAttribute("value");
			isFirstInput = true;
		})
	}
}

getOperator();

equal.addEventListener("click", () => {
	answer.innerHTML = "";
	if(operator === "+") {
		answerValue = firstInput + secondInput;
	} else if(operator === "-") {
		answerValue = firstInput - secondInput;
	} else if(operator === "*") {
		answerValue = firstInput * secondInput;
	} else if(operator === "/") {
		answerValue = firstInput / secondInput;
	}
	answer.innerHTML = answerValue;
	firstInput = answerValue;
	secondInput = "";
})

function checkAnswerLength() {
	answerValue = JSON.stringify(AnswerValue);

	if(answerValue.length >= 8) {
		answerValue = JSON.parse(resultValue);
		answer.innerHTML = answerValue;
	}
}

PosNegChg.addEventListener("click", () => {
 answer.innerHTML = "";
	if(firstInput != "") {
		answerValue = -firstInput;
		firstInput = answerValue;
	}
	if(firstInput != "" && secondInput != "" && operator != "") {
		answerValue = -answerValue;
	}
	
	answer.innerHTML = answerValue
})

percent.addEventListener("click", () => {
	answer.innerHTML = "";
	if(firstInput != "") {
		answerValue = firstInput / 100;
		firstInput = answerValue;
	}
	if(firstInput != "" && secondInput != "" && operator != "") {
		answerValue = answerValue / 100;
	}
	answer.innerHTML = answerValue;
})


clear.addEventListener("click", () => {
	answer.innerHTML = "0";
	firstInput = "";
	secondInput = "";
	operator = "";
	isFirstInput = false;
	isSecondInput = false;
})
