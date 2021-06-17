var toggle = true;

function openNutritionFact() {
    if (toggle) {
        document.getElementById("nutrition-facts").innerHTML = "Per Serving: 345 calories; protein 4.9g; carbohydrates 29.4g; fat 23.5g; cholesterol 86.4mg; sodium 51.5mg.";
        toggle = false;
    } else {
        document.getElementById("nutrition-facts").innerHTML = "";
        toggle = true;
    }
};

function ozToMl(valNum) {
    document.getElementById("outputMilliliters").innerHTML=valNum*29.57;
};

function cupsToMl(valNum) {
    document.getElementById("outputMl").innerHTML=valNum*236.59;
};