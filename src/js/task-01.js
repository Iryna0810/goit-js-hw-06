const itemAll = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemAll.length}`);

itemAll.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
});
