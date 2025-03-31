const numbers = document.querySelectorAll(".operand");
const display = document.querySelector("#display");
const clearButton = document.querySelector(".clear");
const operators = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equals");
const decimal = document.querySelector("#decimal");
const sign = document.querySelector(".sign");
const percent = document.querySelector(".percent");

let step = 1;
let input1;
let input2;
let result;
let operator2;
let solved = 0;
let exponential;


for (let i=0; i<numbers.length; i++){
    let number = numbers[i];
    number.addEventListener('click' , () => {
        if (solved == 0){

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

        }
        else  {
            clear();
        }
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
        if (step == 2){
            calculate();
        }
        else {
            display.innerHTML = 0;
            step = 2;
            operator2 = operator1.innerHTML;
            solved = 0;
        }

    }) 
}

sign.addEventListener('click', () => {
    negative = +display.innerHTML;
    negative = negative * -1;
    display.innerHTML = negative;
    if (step == 1){
        input1 = negative;
        }
        else {
        input2 = negative;
        }
});

percent.addEventListener('click', () => {
    percentage = +display.innerHTML;
    percentage = percentage / 100;
    display.innerHTML = percentage;
    if (step == 1){
    input1 = percentage;
    }
    else {
    input2 = percentage;
    }
});

clearButton.addEventListener("click", clear);
equalButton.addEventListener("click", calculate);

function calculate(){
    input1 = Number(input1);
    input2 = Number(input2);
    if (operator2 == "/" && input2 == ("0")){
        alert("Thought you were being clever huh?");
    }
    else {
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
    console.log(result);
    result = Math.round(result * 100) / 100;
    if (result.toString().length >= 12){
        result = result.toExponential();
        alert("My poor little calculator can't handle numbers this big :(");
    }
    console.log(result);
    display.innerHTML = result;
    input1 = result;
    solved++;
}
}

function clear(){
    display.innerHTML = 0;
    display.style.fontSize = '60px';
    input1 = 0;
    input2 = 0;
    step = 1;
    solved = 0;
}