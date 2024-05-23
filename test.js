// const decimal = require('decimal.js');

// // Define element
//  const answer = document.getElementById("answer");
//  let firstInput = "";
//  let secondInput = "";
//  let currentOperator = "";
//  const numbers = document.querySelectorAll(".numbers");
//  const operators = document.querySelectorAll(".operator");
//  const clear = document.getElementById("clear-all");
//  const PosNegChange = document.getElementById("postitive-negative-change");
//  const percentage = document.getElementById("percent")
//  const equal = document.getElementById("equals");
// const demincial = document.getElementById("dots");
// let caseNum;

//  // Function to handle number input with decimal
//  function handleNumberInput(input) {
//    if (input === "." && firstInput.includes(".") && currentOperator === "") {
//      // Prevent adding more than one decimal point to firstInput
//      console.log("handled double dots for firstInput");
//       return;
//    } else if (input === "." && secondInput.includes(".") && currentOperator !== "") {
//      // Prevent adding more than one decimal point to secondInput
//      console.log("handled double dots for secondInput");
//       return;
//    }

//    if (currentOperator === "") {
//      firstInput += input;
//      answer.innerHTML = firstInput;
//    } else {
//      secondInput += input;
//      answer.innerHTML = secondInput;
//    }
//  }


//  // Perform calculation
// equal.addEventListener("click", () => {
//   if (firstInput.isDecimal() === ture || secondInput.isDecimal() === true) {
//     num1 = new Decimal(firstInput);
//     num2 = new Decimal(secondInput);
//     caseNum = 0;
//   } else {
//     const num1 = parseFloat(firstInput);
//       console.log("parseFloat firstInput");
//      const num2 = parseFloat(secondInput);
//     console.log("parse floated secondInput");
//     caseNum = 1;
//   }
  
//    let result = 0;
//     console.log("result setted to 0");
//   if (caseNum = 0) {
//     switch (currentOperator) {
//       case "+":
//         result = new Decimal(num1).plus(num2);
//         console.log(num1 + " + " + num2 + " = " + result);
//         break;
//       case "-":
//         result = new Decimal(num1).minus(num2);
//         console.log(num1 + " - " + num2 + " = " + result);
//         break;
//       case "*":
//         result = new Decimal(num1).times(num2);
//         console.log(num1 + " * " + num2 + " = " + result);
//         break;
//       case "/":
//         result = num1.div(num2);
//         console.log(num1 + " / " + num2 + " = " + result);
//         break;
//     }
//   } else if (caseNum = 1) {
//     switch (currentOperator) {
//       case "+":
//         result = num1 + num2;
//         console.log(num1 + " + " + num2 + " = " + result);
//         break;
//       case "-":
//         result = num1 - num2;
//         console.log(num1 + " - " + num2 + " = " + result);
//         break;
//       case "*":
//         result = num1 * num2;
//         console.log(num1 + " * " + num2 + " = " + result);
//         break;
//       case "/":
//         result = num1 / num2;
//         console.log(num1 + " / " + num2 + " = " + result);
//         break;
//     }
//   }
//   if (result.isNaN() === true) {
//     alert("The result is NaN please try a new calculation");
//     firstInput = "";
//  	  secondInput = "";
//  	  currentOperator = "";
//     answer.innerHTML = "0";  
//    }
//    answer.innerHTML = result.toString();
//    console.log("answer is a string");
//    firstInput = result.toString();
//    console.log("first input is a string");
//    secondInput = "";
//    console.log("second input is setted to nothing");
//    currentOperator = "";
//    console.log("current operator is setted to nothing")
//  });

//  // Event listener for numbers
//  numbers.forEach(number => {
//    number.addEventListener("click", (e) => {
//      handleNumberInput(e.target.getAttribute("value"));
//      console.log("a numkey is clicked");
//    });
//  });

//  // Event listener for operators
//  operators.forEach(operator => {
//    operator.addEventListener("click", (e) => {
//      if (firstInput !== "" && secondInput === "") {
//        currentOperator = e.target.getAttribute("value");
//      } else if (firstInput !== "" && secondInput !== "") {
//        calculate();
//        currentOperator = e.target.getAttribute("value");
//      }
//    });
//  });

//  //Event listener for clearing answer
//  clear.addEventListener("click", () => {
//  	firstInput = "";
//  	secondInput = "";
//  	currentOperator = "";
//    answer.innerHTML = "0";
//    console.log("clear is clicked");
//  });

//  //Event listener for changing the answer between positive and negative
// PosNegChange.addEventListener("click", () => {
//   let result = Number(answer.innerHTML);
//   result *= -1;
//   answer.innerHTML = result.toString();
//   console.log("Positive Negative Change is clicked")
// });

//  //Event listener for changing the answer to percentage
//  percentage.addEventListener("click", () => {
//  	let result = Number(answer.innerHTML);
//  	result /= 100;
//    answer.innerHTML = result.toString();
//    console.log("the answer is now a percentage")
//  })

//  //Event listener for adding demincial
//  demincial.addEventListener("click", () => {
//    handleNumberInput(".");
//    console.log("a demincial dot is added")
//  });

//  // Event listener for equals button
// // document.getElementById("equals").addEventListener("click", calculate)
// //  console.log("answer is calculated")