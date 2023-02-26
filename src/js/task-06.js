const input = document.querySelector('#validation-input');
const lengthControl = input.dataset.length;
console.log(lengthControl);

input.addEventListener('blur', handlerInputSymbol);

function handlerInputSymbol(event) {
    input.classList.add('valid')
    console.log(event.currentTarget.textContent);
    if (event.currentTarget.textContent.length < lengthControl) {
        input.classList.remove('valid');
        input.classList.add('invalid');
        
    };
}


