'use strict'

const displayVegies = document.querySelector('.displayVegies');
const displayLandMeats = document.querySelector('.displayLandMeats')
const displayInstructions = document.querySelector('.displayInstructions');

const ingredientsVegies = [
    { type: 'vegies', amountS: 1, amountM: 2, amountL: 3, name: "Red Pepper"},
    { type: 'vegies', amountS: 1, amountM: 2, amountL: 3, name: 'Green Pepper'},
    { type: 'vegies', amountS: 1, amountM: 2, amountL: 3, name: "Medium White Onion"},
    { type: 'vegies', amountS: 1, amountM: 2, amountL: 3, name: "Pinch Parsley"},
]
const ingredientsMeatsLand = [
    { type: 'meats', amountS: 1, amountM: 2, amountL: 3, name: "lbs Chicken"},
    { type: 'meats', amountS: 1, amountM: 2, amountL: 3, name: "Spanish Chorizo"},
]
const ingredientsMeatsSea = [
    { type: 'meats-sea', amountS: 6, amountM: 10, amountL: 14, name: "Muscles"},
    { type: 'meats-sea', amountS: 6, amountM: 10, amountL: 14, name: "Prawns"},
    { type: 'meats-sea', amountS: 6, amountM: 10, amountL: 14, name: "clams"},
]
const ingredientsSeasoning = [
    { type: 'seasoning', amountS: 2, amountM: 4, amountL: 6, name: "Pinch Salt"},
    { type: 'seasoning', amountS: 2, amountM: 4, amountL: 6, name: "Pinch Pepper"},
    { type: 'seasoning', amountS: 1, amountM: 2, amountL: 3, name: "Pinch Saphron"},
    { type: 'seasoning', amountS: 2, amountM: 4, amountL: 6, name: "tbs Olive Oil"},
]
const ingredientsOther = [
    { type: 'other', amountS: 2, amountM: 4, amountL: 6, name: "lbs Bomba Rice"},
    { type: 'other', amountS: 2, amountM: 4, amountL: 6, name: "oz Chicken Stock"},
]

const displayIngrdients = function (type) {
    for (let i = 0; i < `ingredients${type}`.length; ++i) {
        `display${type}`.innerHTML += `<div class="ingredient-display">${`ingredients${type}[i]`.amountS} -- ${ingredientsVegies[i].name}</div>`
    }
    
}

for (let i = 0; i < ingredientsVegies.length; ++i) {
    displayVegies.innerHTML += `<div class="ingredient-display">${ingredientsVegies[i].amountS} -- ${ingredientsVegies[i].name}</div>`;
}

displayIngrdients('LandMeats')


