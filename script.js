const calcContainer = document.querySelector("#calcContainer");
const numbers = document.querySelectorAll(".operand");
const display = document.querySelector("#display");
const clearButton = document.querySelector(".clear");
const operators = document.querySelectorAll(".operator");
let step = 1;
let input1;
let input2;
let result;



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

for (let i=0; i<operators.length; i++){
    let operator = operators[i];
    operator.addEventListener('click', () => {
        display.innerHTML = 0;
        step = 2;
        console.log(operator);
        console.log(step);
    }) 
}

clearButton.addEventListener("click", () => {
    display.innerHTML = 0;
    input1 = 0;
    input2 = 0;
    step = 1;
});

function operate() {

}

function add(){
    result = input1 + input2;
}

function multiply(){
    result = input1 * input2;
}

function subtract(){
    result = input1 - input2;
}

function divide(){
    result = input1 / input2;
}