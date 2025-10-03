const display = document.querySelector("#calcdisplay");

display.textContent = "This is a test";


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

