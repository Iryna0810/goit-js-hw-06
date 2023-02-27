const input = document.querySelector('#validation-input');
const lengthControl = input.dataset.length;

input.addEventListener('blur', handlerInputSymbol);

function handlerInputSymbol(event) {
    
    input.textContent = event.currentTarget.value;
    input.classList.remove('invalid')

    if (input.textContent.length < lengthControl) {
        return input.classList.add('invalid');
    }
    else input.classList.add('valid');
}



