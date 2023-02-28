const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}


refs.input.addEventListener('input', handleInputChange);

function handleInputChange(event) {
    refs.span.textContent = event.currentTarget.value.trim();
    
    if (refs.span.textContent === '') {
        refs.span.textContent = "Anonymous";
    }
}

