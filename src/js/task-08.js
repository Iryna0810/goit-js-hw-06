const loginForm = document.querySelector('.login-form');
const loginFormInputEmail = loginForm.firstElementChild;
const loginFormInputPassword = loginFormInputEmail.nextElementSibling;
const loginFormSubmit = loginForm.lastElementChild;

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
    
    const formUserEl = {
        Email: email.value,
        Password: password.value,
    }

    console.log(formUserEl);
  
  event.currentTarget.reset();
}
