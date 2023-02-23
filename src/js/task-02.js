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

ingredients.forEach(
  (ingredient) => {
    const itemLi = document.createElement('li');
    itemLi.className = "item";
    itemLi.textContent = ingredient;
    
    ingredientsAll.append(itemLi);
    console.log(itemLi);
  }
);


