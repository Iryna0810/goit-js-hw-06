const counterValue = document.querySelector("#value");
console.log(counterValue.textContent);
// const numberCountValue = counterValue.textContent;
// const numberCounterValue = Number(counterValue.textContent);
// console.log(numberCounterValue);

const btnDecrement = document.querySelector("#counter");

console.log(btnDecrement);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn);

const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn);

function handlerCounterDecrement(event) {
    counterValue.textContent -= 1;
}

function handlerCounterIncrement(event) {
counterValue.textContent += 1;
}

decrementBtn.addEventListener('click', handlerCounterDecrement);
incrementBtn.addEventListener('click', handlerCounterIncrement);



