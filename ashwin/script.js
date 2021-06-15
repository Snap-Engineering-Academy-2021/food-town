const ORIGINAL_NUM_PEEPS = 4;
const ingredients = [
  { amount: 8, text: "ounces medium pasta shells" },
  { amount: 3, text: "tablespoons unsalted butter" },
  { amount: 1.5, text: "pounds cremini mushrooms, thinly sliced" },
  { amount: 2, text: "large shallots, diced" },
  {
    amount: null,
    text: "Kosher salt and freshly ground black pepper, to taste",
  },
  { amount: 3, text: "cloves garlic, minced" },
  { amount: 4, text: "teaspoons chopped fresh thyme" },
  { amount: 2.5, text: "tablespoons all-purpose flour" },
  { amount: 2, text: "cups beef stock" },
  { amount: 1.5, text: "teaspoons Dijon mustard" },
  { amount: 0.75, text: "cup sour cream" },
  { amount: 0.5, text: "cup freshly grated Parmesan" },
  { amount: 2, text: "tablespoons chopped fresh parsley leaves" },
];

window.onload = function () {
  document.getElementById("num_peeps").value = ORIGINAL_NUM_PEEPS;
  updateAmounts();
};

function updateAmounts() {
  let numPeeps = document.getElementById("num_peeps").value;
  let ingredientsList = document
    .getElementById("ingredients")
    .getElementsByTagName("ul")[0];

  // clear list
  ingredientsList.innerHTML = "";

  ingredients.forEach((ingredient) => {
    let fullText = "";
    if (ingredient.amount) {
      let newAmount = (numPeeps / ORIGINAL_NUM_PEEPS) * ingredient.amount;
      fullText = newAmount + " ";
    }
    fullText += ingredient.text;

    let listItem = document.createElement("h3");
    listItem.innerText = fullText;
    ingredientsList.appendChild(listItem);
  });
}
