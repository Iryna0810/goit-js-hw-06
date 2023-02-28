const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsAll = document.querySelector('#ingredients');

const liAllIngredients = [];

ingredients.forEach(
  (ingredient) => {
    const itemLi = document.createElement('li');
    itemLi.className = "item";
    itemLi.textContent = ingredient;
    liAllIngredients.push(itemLi);
  }
);

ingredientsAll.append(...liAllIngredients);




