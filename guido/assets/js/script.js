'use strict'

const inputButtons = document.querySelectorAll('button');
const displayVegies = document.getElementById('displayVegies');
const displayLandMeats = document.getElementById('displayLandMeats');
const displaySeaMeats = document.getElementById('displaySeaMeats');
const displaySeasonings = document.getElementById('displaySeasoning')
const displayInstructions = document.querySelector('.displayInstructions');

const ingredientsVegies = [
    { type: 'vegies', amountS: 1, amountM: 2, amountL: 3, name: "Red Pepper"},
    { type: 'vegies', amountS: 1, amountM: 2, amountL: 3, name: 'Green Pepper'},
    { type: 'vegies', amountS: 1, amountM: 2, amountL: 3, name: "Medium White Onion"},
    { type: 'vegies', amountS: 1, amountM: 2, amountL: 3, name: "pinch Parsley"},
    { type: 'vegies', amountS: 2, amountM: 4, amountL: 6, name: "cups Bomba Rice"},
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
    { type: 'seasoning', amountS: 1, amountM: 2, amountL: 3, name: "Pinch Saffron"},
    { type: 'seasoning', amountS: 2, amountM: 4, amountL: 6, name: "tbs Olive Oil"},
    { type: 'seasoning', amountS: 2, amountM: 4, amountL: 6, name: "oz Chicken Stock"},
]

let size = 'S'

const displayIngredients = function () {
    for (let i = 0; i < ingredientsVegies.length; ++i) {
        if(size === 'L') {
            displayVegies.innerHTML += `<div>${ingredientsVegies[i].amountL} -- ${ingredientsVegies[i].name}</div>`;
        }else if (size === 'M') {
            displayVegies.innerHTML += `<div>${ingredientsVegies[i].amountM} -- ${ingredientsVegies[i].name}</div>`;
        }else {
            displayVegies.innerHTML += `<div>${ingredientsVegies[i].amountS} -- ${ingredientsVegies[i].name}</div>`;
        }
    }
    
    for (let i = 0; i < ingredientsLandMeats.length; ++i) {
        if(size === 'L') {
            displayLandMeats.innerHTML += `<div>${ingredientsLandMeats[i].amountL} -- ${ingredientsLandMeats[i].name}</div>`;
        }else if (size === 'M') {
            displayLandMeats.innerHTML += `<div>${ingredientsLandMeats[i].amountM} -- ${ingredientsLandMeats[i].name}</div>`;
        }else {
            displayLandMeats.innerHTML += `<div>${ingredientsLandMeats[i].amountS} -- ${ingredientsLandMeats[i].name}</div>`;
        }
    }
    
    for (let i = 0; i < ingredientsSeaMeats.length; ++i) {
        if(size === 'L') {
            displaySeaMeats.innerHTML += `<div>${ingredientsSeaMeats[i].amountL} -- ${ingredientsSeaMeats[i].name}</div>`;
        }else if (size === 'M') {
            displaySeaMeats.innerHTML += `<div>${ingredientsSeaMeats[i].amountM} -- ${ingredientsSeaMeats[i].name}</div>`;
        }else {
            displaySeaMeats.innerHTML += `<div>${ingredientsSeaMeats[i].amountS} -- ${ingredientsSeaMeats[i].name}</div>`;
        }
    }
    
    for (let i = 0; i < ingredientsSeasonings.length; ++i) {
        if(size === 'L') {
            displaySeasonings.innerHTML += `<div>${ingredientsSeasonings[i].amountL} -- ${ingredientsSeasonings[i].name}</div>`;
        }else if (size === 'M') {
            displaySeasonings.innerHTML += `<div>${ingredientsSeasonings[i].amountM} -- ${ingredientsSeasonings[i].name}</div>`;
        }else {
            displaySeasonings.innerHTML += `<div>${ingredientsSeasonings[i].amountS} -- ${ingredientsSeasonings[i].name}</div>`;
        }
    }
}

const resetIngredientsDisplay = function () {
    displayVegies.innerHTML = '';
    displayLandMeats.innerHTML = '';
    displaySeaMeats.innerHTML = '';
    displaySeasonings.innerHTML = '';
}

displayIngredients();

inputButtons.forEach((inputButton) => {
    inputButton.addEventListener('click', () => {
        size = inputButton.value;
        resetIngredientsDisplay();
        displayIngredients();
    })
})
