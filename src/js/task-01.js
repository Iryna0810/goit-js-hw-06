const itemAll = document.querySelectorAll('.item');

const getTotalitem = (array) => {
    let total = 0;

    array.forEach(item => {
        total += 1;
    })
    return total;
};

console.log(`Number of categories: ${getTotalitem(itemAll)}`)

const categories = document.querySelector('#categories');


const firstCategory = categories.firstElementChild;
console.log(`Category: ${firstCategory.firstElementChild.textContent}`);
const firstCategoryEl = firstCategory.querySelectorAll("li");
console.log(`Elements: ${getTotalitem(firstCategoryEl)}`)

const secondCategory = firstCategory.nextElementSibling;
console.log(`Category: ${secondCategory.firstElementChild.textContent}`);
const secondCategoryEl = secondCategory.querySelectorAll("li");
console.log(`Elements: ${getTotalitem(secondCategoryEl)}`)

const thirdCategory = secondCategory.nextElementSibling;
console.log(`Category: ${thirdCategory.firstElementChild.textContent}`);
const thirdCategoryEl = thirdCategory.querySelectorAll("li");
console.log(`Elements: ${getTotalitem(thirdCategoryEl)}`)

    

