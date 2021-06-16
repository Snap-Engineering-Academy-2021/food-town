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

function initMap() {
    const seaSide = {lat:33.60861088365024,lng: -117.929009951382};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: seaSide,
    });
    const marker = new google.maps.Marker({
        position: seaSide,
        map: map,
    })
}