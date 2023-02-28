const input = document.querySelector('#validation-input');
const lengthControl = input.getAttribute('data-length');

input.addEventListener('blur', handlerInputSymbol);

function handlerInputSymbol() {
    
    input.classList.remove('invalid', 'valid')

    if (input.value.length === Number(lengthControl)) {
        input.classList.add('valid')
        return;
    } else input.classList.add('invalid');

}



