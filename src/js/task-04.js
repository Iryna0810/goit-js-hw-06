const counterElement = document.querySelector("#value");
const btnDecrement = document.querySelector("#counter");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

function handlerCounterDecrement() {
    counterValue -= 1;
    counterElement.textContent = counterValue;
}

function handlerCounterIncrement() {
    counterValue += 1;
    counterElement.textContent = counterValue;
}

decrementBtn.addEventListener('click', handlerCounterDecrement);
incrementBtn.addEventListener('click', handlerCounterIncrement);



