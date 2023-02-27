const input = document.querySelector('#validation-input');
const lengthControl = input.dataset.length;
console.log(lengthControl);

input.addEventListener('blur', handlerInputSymbol);

function handlerInputSymbol(event) {
    console.log(event.currentTarget.textContent);
    input.textContent = event.currentTarget.value;
    if (input.textContent.length < lengthControl) {
        input.classList.add('invalid');
        return;
        } else input.classList.add('valid');
}



