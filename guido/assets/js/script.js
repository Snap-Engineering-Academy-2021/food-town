'use strict'

const displayIngredients = document.querySelector('.displayIngredients');
const displayInstructions = document.querySelector('.displayInstructions');

const ingredients = [
    { type: 'vegies', amountS: 1, amountM: 2, amountL: 3, name: "Red Pepper"},
    { type: 'vegies', amountS: 1, amountM: 2, amountL: 3, name: 'Green Pepper'},
    { type: 'vegies', amountS: 1, amountM: 2, amountL: 3, name: "Medium White Onion"},
    { type: 'vegies', amountS: 1, amountM: 2, amountL: 3, name: "Pinch Parsley"},
    { type: 'meats', amountS: 1, amountM: 2, amountL: 3, name: "lbs Chicken"},
    { type: 'meats', amountS: 1, amountM: 2, amountL: 3, name: "Spanish Chorizo"},
    { type: 'meats-sea', amountS: 6, amountM: 10, amountL: 14, name: "Muscles"},
    { type: 'meats-sea', amountS: 6, amountM: 10, amountL: 14, name: "Prawns"},
    { type: 'meats-sea', amountS: 6, amountM: 10, amountL: 14, name: "clams"},
    { type: 'seasoning', amountS: 2, amountM: 4, amountL: 6, name: "Pinch Salt"},
    { type: 'seasoning', amountS: 2, amountM: 4, amountL: 6, name: "Pinch Pepper"},
    { type: 'seasoning', amountS: 1, amountM: 2, amountL: 3, name: "Pinch Saphron"},
    { type: 'seasoning', amountS: 2, amountM: 4, amountL: 6, name: "tbs Olive Oil"},
    { type: 'other', amountS: 2, amountM: 4, amountL: 6, name: "lbs Bomba Rice"},
    { type: 'other', amountS: 2, amountM: 4, amountL: 6, name: "oz Chicken Stock"},

]

for (let i = 0; i < ingredients.length; ++i) {
    displayIngredients.innerHTML += `<div class="ingredient-display">${ingredients[i].amountS} -- ${ingredients[i].name}</div>`;
}




