const numbers = document.querySelectorAll('.chars__numbers');
const input = document.querySelector('.calc__input');
const dot = document.querySelector('.chars__dot');
const eq = document.querySelector('.chars__eq');
const dig = document.querySelector('.chars__dig');
const mul = document.querySelector('.chars__mul');
const minus = document.querySelector('.chars__minus');
const plus = document.querySelector('.chars__plus');
const clear = document.querySelector('.calc__clear-all');
const del = document.querySelector('.calc__clear-one');

let operator;
let temp_1 = 0;
let temp_2 = 0;

clear.addEventListener('click', () => {
    input.value = '';
    temp_1 = 0;
});

del.addEventListener('click', () => {
    input.value = input.value.slice(0, input.value.length-1);
});

numbers.forEach(number => {
    number.addEventListener('click', () => {
        input.value = input.value + number.textContent;
    });
});

dot.addEventListener('click', (event) => {
    if(input.value === ''){
        input.value = input.value + '0.';
    }else if(input.value === '0.'){
        event.preventDefault();
    }else{
        let i = false;
        for(let a of input.value){
            if(a==='.'){
                i = true;
            }
        }
        if(i === true){
            event.preventDefault();
        }else{
        input.value = input.value + dot.textContent;
        }
    }
});

dig.addEventListener('click', (event) => {
    if(input.value === ''){
        event.preventDefault();
    }else if(input.value === '0.'){
        event.preventDefault();
    }else if(input.value === '0'){
        event.preventDefault();
    }else{
        temp_1 = input.value;
        operator = '/';
        input.value = '';
    }
});

mul.addEventListener('click', (event) => {
    if(input.value === ''){
        event.preventDefault();
    }else if(input.value === '0.'){
        event.preventDefault();
    }else{
        temp_1 = input.value;
        operator = '*';
        input.value = '';
    }
});

minus.addEventListener('click', (event) => {
    if(input.value === ''){
        input.value = '-';
    }else if(input.value === '0.'){
        event.preventDefault();
    }else{
        temp_1 = input.value;
        operator = '-';
        input.value = '';
    }
});

plus.addEventListener('click', (event) => {
    if(input.value === ''){
        event.preventDefault();
    }else if(input.value === '0.'){
        event.preventDefault();
    }else if(input.value === '-'){
        input.value = '';
    }else{
        temp_1 = input.value;
        operator = '+';
        input.value = '';
    }
});


eq.addEventListener('click', (event) => {
    debugger;
    if(input.value === ''){
        event.preventDefault();
    }else if(input.value === '0.'){
        event.preventDefault();
    }else if(temp_1 === 0){
        event.preventDefault();
    }else{
        temp_2 = input.value;
        const finish = operate(operator, temp_1, temp_2);
        input.value = parseFloat(finish.toFixed(5));
    }
});



