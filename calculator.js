let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')
let btn0 = document.getElementById('btn0')
let btnDivide = document.getElementById('btndivide')
let btnBackspace = document.getElementById('btnbackspace')
let btnClear = document.getElementById('btnclear')
let btnAdd = document.getElementById('btnadd')
let btnSub = document.getElementById('btnsubtract')
let btnMult = document.getElementById('btnmult')
let btnEqual = document.getElementById('btnequal')
let num1 = undefined;
let num2 = undefined;
let operator = undefined;
let result = 0;
let displayValue ="";
let display = document.getElementById('numberdisplay');

function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;

}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    if(num2 == 0){
        alert("You can't divide by 0.")
    }else{
        return num1/num2;}
}
function operate(operator, num1, num2){
    return operator(Number(num1),Number(num2));
}
function calculateResult() {
    if (!operator || (!num1 && !num2)) {
        return;
    }

    if (!num2) {
        num2 = displayValue == "" ? 0 : displayValue;
    }
    result = operate(operator, num1, num2);
    displayValue = result.toString();
    enterDisplay(displayValue);

    num1 = "";
    num2 = "";
    operator = null;
}

function enterDisplay(val) {
    if (val.length > 8) {
        display.innerText = "OVERFLOW";
        num1 = "";
        num2 = "";
        result = 0;
        operator = null;
        return;
    }

    if (val == '.') {
        display.innerText = '0.';
        return;
    }
    roundedVal = Math.round(val * Math.pow(10, 8)) / Math.pow(10, 8) // round to 8 decimal places
    if (val[val.length-1] == '.') roundedVal += '.';
    display.innerText = roundedVal;
}
function enterNumber(num) {
    if (result) {
        result = 0;
    }
    if (!operator) {
        num1 += num;
        displayValue = num1;
    }
    // when do we enter number 2? -> after operator
    if (operator) {
        num2 += num;
        displayValue = num2;
    }
    enterDisplay(displayValue);
}
function clearDisplay(){
    display.innerText = "0";
        num1 = "";
        num2 = "";
        result = 0;
        operator = null;
        return;
}

function changeOperatorToAdd(){
    return operator = add;
}
function changeOperatorToSub(){
    return operator = subtract;
}
function changeOperatorToMult(){
    return operator = multiply;
}
function changeOperatorToDivide(){
    return operator = divide;
}
btnAdd.addEventListener('click', changeOperatorToAdd);

btnDivide.addEventListener('click', changeOperatorToDivide);

btnMult.addEventListener('click', changeOperatorToMult);

btnSub.addEventListener('click', changeOperatorToSub);

btnEqual.addEventListener('click', calculateResult);

btnClear.addEventListener('click', clearDisplay )

btnBackspace.addEventListener('click', () => {
    if (result) {
        num1 = result.toString();
        num1 = num1.substring(0, num1.length - 1);
        displayValue = num1;
        enterDisplay(num1);
        result = 0;
    }
    else if (!num2) {
        num1 = num1.substring(0, num1.length - 1);
        displayValue = num1;
        enterDisplay(num1);
    }
    else {
        num2 = num2.substring(0, num2.length - 1);
        displayValue = num2;
        enterDisplay(num2);
    }
    
})
btn1.addEventListener('click', () => {
    enterNumber('1');
});
btn2.addEventListener('click', () => {
    enterNumber('2');
});
btn3.addEventListener('click', () => {
    enterNumber('3');
});
btn4.addEventListener('click', () => {
    enterNumber('4');
});
btn5.addEventListener('click', () => {
    enterNumber('5');
});
btn6.addEventListener('click', () => {
    enterNumber('6');
});
btn7.addEventListener('click', () => {
    enterNumber('7');
});
btn8.addEventListener('click', () => {
    enterNumber('8');
});
btn9.addEventListener('click', () => {
    enterNumber('9');
});
btn0.addEventListener('click', () => {
    enterNumber('0');
});
