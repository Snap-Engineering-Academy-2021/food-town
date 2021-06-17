'use strict'

const inputButtons = document.querySelectorAll('button');
const displayVegies = document.querySelector('.displayVegies');
const displayLandMeats = document.querySelector('.displayLandMeats');
const displaySeaMeats = document.querySelector('.displaySeaMeats');
const displaySeasonings = document.querySelector('.displaySeasoning')
const displayInstructions = document.querySelector('.displayInstructions');

const ingredientsVegies = [
    { type: 'vegies', amountS: 1, amountM: 2, amountL: 3, name: "Red Pepper"},
    { type: 'vegies', amountS: 1, amountM: 2, amountL: 3, name: 'Green Pepper'},
    { type: 'vegies', amountS: 1, amountM: 2, amountL: 3, name: "Medium White Onion"},
    { type: 'vegies', amountS: 1, amountM: 2, amountL: 3, name: "Pinch Parsley"},
    { type: 'vegies', amountS: 2, amountM: 4, amountL: 6, name: "lbs Bomba Rice"},
]
const ingredientsLandMeats = [
    { type: 'meats', amountS: 1, amountM: 2, amountL: 3, name: "lbs Chicken"},
    { type: 'meats', amountS: 1, amountM: 2, amountL: 3, name: "Spanish Chorizo"},
]
const ingredientsSeaMeats = [
    { type: 'meats-sea', amountS: 6, amountM: 10, amountL: 14, name: "Muscles"},
    { type: 'meats-sea', amountS: 6, amountM: 10, amountL: 14, name: "Prawns"},
    { type: 'meats-sea', amountS: 6, amountM: 10, amountL: 14, name: "clams"},
]
const ingredientsSeasonings = [
    { type: 'seasoning', amountS: 2, amountM: 4, amountL: 6, name: "Pinch Salt"},
    { type: 'seasoning', amountS: 2, amountM: 4, amountL: 6, name: "Pinch Pepper"},
    { type: 'seasoning', amountS: 1, amountM: 2, amountL: 3, name: "Pinch Saphron"},
    { type: 'seasoning', amountS: 2, amountM: 4, amountL: 6, name: "tbs Olive Oil"},
    { type: 'seasoning', amountS: 2, amountM: 4, amountL: 6, name: "oz Chicken Stock"},
]
let size = 'S'

inputButtons.forEach((inputButton) => {
    inputButton.addEventListener('click', () => {
        size = inputButton.value;
        resetIngredientsDisplay();
        displayIngredients();
    })
})

const displayIngredients = function () {
    for (let i = 0; i < ingredientsVegies.length; ++i) {
        if(size === 'L') {
            displayVegies.innerHTML += `<div class="ingredient-display">${ingredientsVegies[i].amountL} -- ${ingredientsVegies[i].name}</div>`;
        }else if (size === 'M') {
            displayVegies.innerHTML += `<div class="ingredient-display">${ingredientsVegies[i].amountM} -- ${ingredientsVegies[i].name}</div>`;
        }else {
            displayVegies.innerHTML += `<div class="ingredient-display">${ingredientsVegies[i].amountS} -- ${ingredientsVegies[i].name}</div>`;
        }
    }
    
    for (let i = 0; i < ingredientsLandMeats.length; ++i) {
        if(size === 'L') {
            displayLandMeats.innerHTML += `<div class="ingredient-display">${ingredientsLandMeats[i].amountL} -- ${ingredientsLandMeats[i].name}</div>`;
        }else if (size === 'M') {
            displayLandMeats.innerHTML += `<div class="ingredient-display">${ingredientsLandMeats[i].amountM} -- ${ingredientsLandMeats[i].name}</div>`;
        }else {
            displayLandMeats.innerHTML += `<div class="ingredient-display">${ingredientsLandMeats[i].amountS} -- ${ingredientsLandMeats[i].name}</div>`;
        }
    }
    
    for (let i = 0; i < ingredientsSeaMeats.length; ++i) {
        if(size === 'L') {
            displaySeaMeats.innerHTML += `<div class="ingredient-display">${ingredientsSeaMeats[i].amountL} -- ${ingredientsSeaMeats[i].name}</div>`;
        }else if (size === 'M') {
            displaySeaMeats.innerHTML += `<div class="ingredient-display">${ingredientsSeaMeats[i].amountM} -- ${ingredientsSeaMeats[i].name}</div>`;
        }else {
            displaySeaMeats.innerHTML += `<div class="ingredient-display">${ingredientsSeaMeats[i].amountS} -- ${ingredientsSeaMeats[i].name}</div>`;
        }
    }
    
    for (let i = 0; i < ingredientsSeasonings.length; ++i) {
        if(size === 'L') {
            displaySeasonings.innerHTML += `<div class="ingredient-display">${ingredientsSeasonings[i].amountL} -- ${ingredientsSeasonings[i].name}</div>`;
        }else if (size === 'M') {
            displaySeasonings.innerHTML += `<div class="ingredient-display">${ingredientsSeasonings[i].amountM} -- ${ingredientsSeasonings[i].name}</div>`;
        }else {
            displaySeasonings.innerHTML += `<div class="ingredient-display">${ingredientsSeasonings[i].amountS} -- ${ingredientsSeasonings[i].name}</div>`;
        }
    }
}

const resetIngredientsDisplay = function () {
    displayVegies.innerHTML = '';
    displayLandMeats.innerHTML = '';
    displaySeaMeats.innerHTML = '';
    displaySeasonings.innerHTML = '';
}


