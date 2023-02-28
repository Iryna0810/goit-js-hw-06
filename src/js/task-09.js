function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const textChangeColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', handleBackgroundColor);

function handleBackgroundColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = `${randomColor}`;
  textChangeColor.textContent = `${randomColor}`;
  return;
}


