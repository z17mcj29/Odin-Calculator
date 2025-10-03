const display = document.querySelector("#calcdisplay");
let value1 = 0;
let value2 = 0;
let operator = '';
let defaultState = true;
let initialize = true;

display.textContent = "This is a test";
let displayText = [];
let viewText = '';

function updateDisplay(val){
    console.log(defaultState);
    if(defaultState) defaultState = false;
    displayText.push(val);    
    console.log(defaultState);
    console.log(displayText)
    viewText = displayText.join('');
    display.textContent = viewText;
}
//  I need to convert the array to a string for the display.


//  I need to think through the steps that happen under each scenario when a 
//  button is pressed.
//  Default Reset state:
//      enter button does nothing
//      I"m not sure how real calculators work, but this one isn't going to
//      calculate anything until a button is pressed.
//      That means if I hit *,/,+, or - before the default state is removed
//      nothing will happen.
//  First entry state:
//      I made an "initialze" statement that lets me know if this is the first
//      entry in the calculation. If this is the first entry I need to enter
//      the value into value1 and store the calculation command.
//  Second entry state:
//      I need to enter the current value into value2 and then use the previously
//      stored calculation command (+, -, *, /) and calculate value 1 and 2.
//      I will then need to have two different paths depending on if another
//      calculation button was pressed or enter was pressed. Enter will total
//      the value and reset defaultState and initialize state causing the
//      next entry to be a new calculation.

/* This code went a bit sideways. Going to restart, but saving for reference
function calculate(operand){
    if (defaultState) return;
    if (initialize) {
        //code that puts the viewText into value1. Continues to show the current value
        //but will erase that value and start over when another button is pressed.
    if (operand === "enter") return;
        value1 = Number(viewText);
        initialize = false;
        displayText = [];
        operator = operand;
        defaultState = true;
    } else{
        if (defaultState) return;
        value2 = Number(viewText);

        switch (operator) {
            case "+":
                add(value1, value2);
                break;
            case "-":
                subtract(value1, value2);
                break;
            case "/":
                divide(value1, value2);
                break;
            case "*":
                multiply(value1, value2);
                break;
            case "clear":
                value1 = 0;
                value2 = 0;
                operator = '';
                defaultState = true;
                initialize = true;
                display.textContent = '0';
                displayText = [];
                
                break;
            case "enter":
                //code
                break;
        }


    }
    
}
*/

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

function calculate(opCode){

    //if clear is pressed it will immediately reset everything.
    if (opCode === 'clear') return resetCalculator();

    //take care of the case where no input has been given, but an operator button
    //was pressed first.
    if (defaultState) return;
   
    if (initialize) return firstNumber(opCode);
    secondNumber();

    completeCalc(opCode);


//    if (opCode === 'enter') return completeCalc();
//    continueCalc(opCode);   
}

function operate(a,b,opType){
    
}

function resetCalculator(){
    value1 = 0;
    value2 = 0;
    operator = '';
    defaultState = true;
    initialize = true;

    display.textContent = '0';
    displayText = [];
    viewText = '';
}

function softReset(){
    value1 = 0;
    value2 = 0;
    operator = '';
    defaultState = true;
    initialize = true;

    //display.textContent = '0';
    displayText = [];
    viewText = '';

}

function continueCalcReset(opCode){
    value1 = Number(viewText);
    value2 = 0;
    operator = opCode;
}

function firstNumber(opCode){
    value1 = Number(viewText);
    initialize = false;
    displayText = [];
    operator = opCode;
    defaultState = true;
}

function secondNumber(){
    value2 = Number(viewText);
    defaultState = true;
}

function completeCalc(opCode){

    switch(operator){
        case '+':
            viewText = add(value1, value2);
            display.textContent = viewText;
            opCode === 'enter' ? softReset(): continueCalcReset(opCode);
            break;
        case '-':
            viewText = subtract(value1, value2);
            display.textContent = viewText;
            opCode === 'enter' ? softReset(): continueCalcReset(opCode);
            break;
        case '/':
            viewText = divide(value1, value2);
            display.textContent = viewText;
            opCode === 'enter' ? softReset(): continueCalcReset(opCode);
            break;
        case '*':
            viewText = multiply(value1, value2);
            display.textContent = viewText;
            opCode === 'enter' ? softReset(): continueCalcReset(opCode);
            break; 
    }
}



/*
console.log(add(5,7));
console.log(subtract(8,4));
console.log(multiply(3,9));
console.log(divide(12,3));

function operate(a,b,opType){
    return opType(a,b);
}
console.log(operate(5,7,add));
console.log(operate(8,4,subtract));
console.log(operate(3,9, multiply));
console.log(operate(12,3,divide));
*/
