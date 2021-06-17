// var toggle = false;


// function onClick() {

//     if (!toggle) {
//         document.getElementById("greeting").innerHTML = "hi bud, today is " + Date();
//         toggle = true;
//     } else {
//         document.getElementById("greeting").innerHTML = "";
//         toggle = false;
//     }
    
//     // alert("Hello")
// }

// function generateWord() {
//     var welcome = document.createElement('h1');
//     welcome.innerHTML = "W E L C O M E";
//     welcome.id = "welcome";
//     welcome.style.position = 'absolute';
//     var SOME_RANDOM_NUMER = Math.floor(Math.random()*100)+1;
//     var SOME_OTHER_RANDOM_NUMBER = Math.floor(Math.random()*100)+1;

//     welcome.style.left = SOME_RANDOM_NUMER + '%';
//     welcome.style.top = SOME_OTHER_RANDOM_NUMBER + '%';
//     document.getElementById('soup').appendChild(welcome);
// }

// window.onload = () => {
//     generateWord();
// }

// function initMap() {
//     const seaSide = {lat:33.60861088365024,lng: -117.929009951382};
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: seaSide,
//     });
//     const marker = new google.maps.Marker({
//         position: seaSide,
//         map: map,
//     })
// }

var toggle = false;


function openFullMenu() {
    if (!toggle) {
        document.getElementById("ham-and-cheese").innerHTML = "Ham & Cheese";
        document.getElementById("ham-and-cheese-with-jalapeno-2").innerHTML = "Ham & Cheese with Jalapeno";
        document.getElementById("turkey-and-cheese").innerHTML = "Turkey & Cheese";
        document.getElementById("cheese").innerHTML = "Cheese";
        document.getElementById("cheese-with-jalapeno").innerHTML = "Cheese with Jalapeno";
        document.getElementById("plain").innerHTML = "Plain";
        document.getElementById("chocolate").innerHTML = "Chocolate";
        document.getElementById("blueberry-cream-cheese").innerHTML = "Blueberry Cream Cheese";
        document.getElementById("strawberry-cream-cheese").innerHTML = "Strawberry Cream Cheese";
        document.getElementById("cream-cheese").innerHTML = "Cream Cheese";
        document.getElementById("almond").innerHTML = "Almond";
        document.getElementById("button").innerHTML = "Close Croissant Menu";
        toggle = true;
    } else {
        document.getElementById("ham-and-cheese").innerHTML = "";
        document.getElementById("ham-and-cheese-with-jalapeno-2").innerHTML = "";
        document.getElementById("turkey-and-cheese").innerHTML = "";
        document.getElementById("cheese").innerHTML = "";
        document.getElementById("cheese-with-jalapeno").innerHTML = "";
        document.getElementById("plain").innerHTML = "";
        document.getElementById("chocolate").innerHTML = "";
        document.getElementById("blueberry-cream-cheese").innerHTML = "";
        document.getElementById("strawberry-cream-cheese").innerHTML = "";
        document.getElementById("cream-cheese").innerHTML = "";
        document.getElementById("almond").innerHTML = "";
        document.getElementById("button").innerHTML = "Open Croissant Menu";
        toggle = false;
    }
}

function mainPage(){
    window.open("https://snap-engineering-academy-2021.github.io/food-town/");
  }