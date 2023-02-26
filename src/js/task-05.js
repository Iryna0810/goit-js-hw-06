const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}


refs.input.addEventListener('input', handleInputChange);

function handleInputChange(event) {
    if (refs.span.textContent.length > 1) {
        refs.span.textContent = event.currentTarget.value;
    } else refs.span.textContent = "Anonymous"
}

