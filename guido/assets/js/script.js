"use strict";

const inputButtons = document.querySelectorAll("button");
const displayVegies = document.getElementById("displayVegies");
const displayLandMeats = document.getElementById("displayLandMeats");
const displaySeaMeats = document.getElementById("displaySeaMeats");
const displaySeasonings = document.getElementById("displaySeasoning");
const displayInstructions = document.querySelector(".displayInstructions");

const ingredientsVegies = [
  { type: "vegies", amountS: 1, amountM: 2, amountL: 3, name: "Red Pepper" },
  { type: "vegies", amountS: 1, amountM: 2, amountL: 3, name: "Green Pepper" },
  {
    type: "vegies",
    amountS: 1,
    amountM: 2,
    amountL: 3,
    name: "Medium White Onion",
  },
  {
    type: "vegies",
    amountS: '1/2',
    amountM: 1,
    amountL: '1 1/2',
    name: "cups Frozen Peas",
  },
  {
    type: "vegies",
    amountS: 3,
    amountM: 6,
    amountL: 9,
    name: "cloves of Garlic",
  },
  { type: "vegies", amountS: 1, amountM: 2, amountL: 3, name: "pinch Parsley" },
  {
    type: "vegies",
    amountS: 2,
    amountM: 4,
    amountL: 6,
    name: "cups Bomba Rice",
  },
];
const ingredientsLandMeats = [
  {
    type: "meats",
    amountS: 1,
    amountM: 2,
    amountL: 3,
    name: "lbs Chicken Thighs",
  },
  {
    type: "meats",
    amountS: 1,
    amountM: 2,
    amountL: 3,
    name: "Spanish Chorizo",
  },
];
const ingredientsSeaMeats = [
  { type: "meats-sea", amountS: 6, amountM: 10, amountL: 14, name: "Mussels" },
  { type: "meats-sea", amountS: 6, amountM: 10, amountL: 14, name: "Prawns" },
  { type: "meats-sea", amountS: 6, amountM: 10, amountL: 14, name: "clams" },
];
const ingredientsSeasonings = [
  { type: "seasoning", amountS: 2, amountM: 4, amountL: 6, name: "pinch Salt" },
  {
    type: "seasoning",
    amountS: 2,
    amountM: 4,
    amountL: 6,
    name: "pinch Pepper",
  },
  {
    type: "seasoning",
    amountS: 2,
    amountM: 4,
    amountL: 6,
    name: "tsp Spanish Paprika",
  },
  {
    type: "seasoning",
    amountS: 1,
    amountM: 2,
    amountL: 3,
    name: "pinch Saffron",
  },
  {
    type: "seasoning",
    amountS: 2,
    amountM: 4,
    amountL: 6,
    name: "tbs Olive Oil",
  },
  {
    type: "seasoning",
    amountS: 2,
    amountM: 4,
    amountL: 6,
    name: "oz Chicken Stock",
  },
];
const instructions = [
  "Finely dice all the peppers, onions, and parsley.",
  "Place the saffron in an aluminum pouch and place it on a medium flame for about 10 seconds each side. This helps bring out the flavor.",
  "Bring the pan to heat.",
  "Add olive oil, preferably Spanish Olive Oil.",
  "Add peppers, onions, and garlic. And caramelize them.",
  "Cut the spanish chorizo, add it to the pan.",
  "Cut the chicken to desired size and add it to the pan.",
  "Cook until all the juices from the chorizo fuse with the rest of the ingredients in the pan.",
  "Add salt and pepper to taste.",
  "Add the Bomba rice and the chicken broth.",
  "Give it a light mix, then add the saffron.",
  "Cook everything until the rice is al-dente.",
  "Check the salt and add to taste.",
  "Add the prawns and cook for about 3 - 5 min until they are almost done.",
  "Add the mussels, clams, and peas as the final ingredient, and let cook until done. About 5 minutes.",
  "Garnish with some chopped parsley and serve.",
  "Enjoy with some delicious cold Sangria!!!!",
];
let size = "S";

const displayIngredients = function () {
  for (let i = 0; i < ingredientsVegies.length; ++i) {
    if (size === "L") {
      displayVegies.innerHTML += `<div>${ingredientsVegies[i].amountL} -- ${ingredientsVegies[i].name}</div>`;
    } else if (size === "M") {
      displayVegies.innerHTML += `<div>${ingredientsVegies[i].amountM} -- ${ingredientsVegies[i].name}</div>`;
    } else {
      displayVegies.innerHTML += `<div>${ingredientsVegies[i].amountS} -- ${ingredientsVegies[i].name}</div>`;
    }
  }

  for (let i = 0; i < ingredientsLandMeats.length; ++i) {
    if (size === "L") {
      displayLandMeats.innerHTML += `<div>${ingredientsLandMeats[i].amountL} -- ${ingredientsLandMeats[i].name}</div>`;
    } else if (size === "M") {
      displayLandMeats.innerHTML += `<div>${ingredientsLandMeats[i].amountM} -- ${ingredientsLandMeats[i].name}</div>`;
    } else {
      displayLandMeats.innerHTML += `<div>${ingredientsLandMeats[i].amountS} -- ${ingredientsLandMeats[i].name}</div>`;
    }
  }

  for (let i = 0; i < ingredientsSeaMeats.length; ++i) {
    if (size === "L") {
      displaySeaMeats.innerHTML += `<div>${ingredientsSeaMeats[i].amountL} -- ${ingredientsSeaMeats[i].name}</div>`;
    } else if (size === "M") {
      displaySeaMeats.innerHTML += `<div>${ingredientsSeaMeats[i].amountM} -- ${ingredientsSeaMeats[i].name}</div>`;
    } else {
      displaySeaMeats.innerHTML += `<div>${ingredientsSeaMeats[i].amountS} -- ${ingredientsSeaMeats[i].name}</div>`;
    }
  }

  for (let i = 0; i < ingredientsSeasonings.length; ++i) {
    if (size === "L") {
      displaySeasonings.innerHTML += `<div>${ingredientsSeasonings[i].amountL} -- ${ingredientsSeasonings[i].name}</div>`;
    } else if (size === "M") {
      displaySeasonings.innerHTML += `<div>${ingredientsSeasonings[i].amountM} -- ${ingredientsSeasonings[i].name}</div>`;
    } else {
      displaySeasonings.innerHTML += `<div>${ingredientsSeasonings[i].amountS} -- ${ingredientsSeasonings[i].name}</div>`;
    }
  }
};

const resetIngredientsDisplay = function () {
  displayVegies.innerHTML = "";
  displayLandMeats.innerHTML = "";
  displaySeaMeats.innerHTML = "";
  displaySeasonings.innerHTML = "";
};

displayIngredients();

inputButtons.forEach((inputButton) => {
  inputButton.addEventListener("click", () => {
    size = inputButton.value;
    resetIngredientsDisplay();
    displayIngredients();
  });
});

const dispInstructions = function () {
  for (let i = 0; i < instructions.length; ++i) {
    displayInstructions.innerHTML += `<div>${i + 1} -- ${
      instructions[i]
    }</div>`;
  }
};

dispInstructions();
