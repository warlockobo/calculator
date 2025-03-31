const calcContainer = document.querySelector("#calcContainer");
const numbers = document.querySelectorAll(".operand");
const display = document.querySelector("#display");
const clearButton = document.querySelector(".clear");
const operators = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equals");
const decimal = document.querySelector("#decimal");
let step = 1;
let input1;
let input2;
let result;
let operator2;


for (let i=0; i<numbers.length; i++){
    let number = numbers[i];
    number.addEventListener('click' , () => {
        if (display.innerHTML === "0") {
            display.innerHTML = number.innerHTML;
        }
        else {
            display.innerHTML += number.innerHTML;
        }
        if (step === 1){
        input1 = +display.innerHTML;
        }
        else {
        input2 = +display.innerHTML;
        }
        console.log(input1);
        console.log(input2);
    }
)};

decimal.addEventListener('click', () => {
    if (display.innerHTML.includes(".")){
        alert("You can't have more than one decimal!");
    }
    else {
        display.innerHTML += ".";
    }
});

for (let i=0; i<operators.length; i++){
    let operator1 = operators[i];
    operator1.addEventListener('click', () => {
        console.log(result);
        if (step == 2){
            calculate();
        }
        else {
            display.innerHTML = 0;
            step = 2;
            operator2 = operator1.innerHTML;
        }

    }) 
}

clearButton.addEventListener("click", () => {
    display.innerHTML = 0;
    input1 = 0;
    input2 = 0;
    step = 1;
});

equalButton.addEventListener("click", calculate);

function calculate(){
    switch(operator2){
        case "+":
            result = input1 + input2;
            break;
        case "-":
            result = input1 - input2;
            break;
        case "*":
            result = input1 * input2;
            break;
        case "/":
            result = input1 / input2;
            break;
    }
    step = 1;
    display.innerHTML = result;
    input1 = result;
}

