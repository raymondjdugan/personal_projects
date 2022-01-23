const btnAbs = document.getElementById('abs');
const btn0 = document.getElementById('num0');
const btnPeriod = document.getElementById('period');
const btnEquals = document.getElementById('equals');

const btn1 = document.getElementById('num1');
const btn2 = document.getElementById('num2');
const btn3 = document.getElementById('num3');
const btnAdd = document.getElementById('add');

const btn4 = document.getElementById('num4');
const btn5 = document.getElementById('num5');
const btn6 = document.getElementById('num6');
const btnSubtract = document.getElementById('subtract');

const btn7 = document.getElementById('num7');
const btn8 = document.getElementById('num8');
const btn9 = document.getElementById('num9');
const btnMultiply = document.getElementById('multiply');

const btnOpenP = document.getElementById('open-p');
const btnCloseP = document.getElementById('close-p');
const btnDivide = document.getElementById('divide');
const btnPow2 = document.getElementById('pow2');

const btnPowX = document.getElementById('powX');
const btnSqrt = document.getElementById('sqrt');
const btnClear = document.getElementById('clear');
const btnDelete = document.getElementById('del');

const display = document.getElementById('display');

let inputArray = [];

btn1.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push(1);
})
btn2.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push(2);
})
btn3.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push(3);
})
btnAdd.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push('+');
    console.log(inputArray)
})
btn4.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push(4);
})
btnSubtract.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push('-');
})
btn5.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push(5);
})
btn6.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push(6);
})
btn7.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push(7);
})
btn8.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push(8);
})
btn9.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push(9);
})
btnMultiply.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push('*');
})
btn0.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push(0);
})
btn9.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push(9);
})
btn9.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push(9);
})
btn9.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push(9);
})
btn9.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push(9);
})
btn9.addEventListener('click', function (e) {
    e.preventDefault();
    inputArray.push(9);
})

function calculate(arrayOfInput) {
    arrayOfInput.forEach(value => {

    })
}
calculate(inputArray)
