const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsAll = document.querySelector('#ingredients')
console.log(ingredientsAll);

const liAll = [];

ingredients.forEach(
  (ingredient) => {
    const itemLi = document.createElement('li');
    itemLi.className = "item";
    itemLi.textContent = ingredient;
    liAll.push(itemLi);
  }
);

liAll.map((itemLi) => ingredientsAll.append(itemLi));




