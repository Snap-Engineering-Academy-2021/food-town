var toggle = true;

//onClick() is used by the button to display and undisplay a small greeting
function onClick() {
    if (toggle) {
        document.getElementById("greeting").innerHTML = "Hello there, it's " + Date();
        toggle = false;
    } else {
        document.getElementById("greeting").innerHTML = "";
        toggle = true;
    }
};


//generateWord() is a function to demo how we might create a single element and insert it in the DOM, using javascript
function generateWord(){
    var randomPercent = Math.floor(Math.random() * (100)); 
    var test = document.createElement('h1');
    test.innerText = "W E L C O M E";
    test.id = 'test';
    test.style.position = 'absolute';
    test.style.left = randomPercent + '%';
    test.style.top = randomPercent + '%';
    document.getElementById("main").appendChild(test);

}

//generateAllWords() is a function that takes all of our names and creates a link!
function generateAllWords(){
    var words = ["ashwin", "jenny", "danny", "kevin", "phoenix", "samara", "venus", "erica", "jonathan", "samantha", "ana", "jenna", "guido", "luis", "JT", "newsha", "ashley"];
    for (let i = 0; i < words.length; i++) {
        //generate some random percentages and degrees
        var randomLeft = Math.floor(Math.random() * (6)) - 3; 
        var randomTop = Math.floor(Math.random() * (10)) - 5; 
        var randomRotate = Math.floor(Math.random() *10); 

        //create a new element for each name in the list 
        var word = document.createElement('a');
        word.innerText = words[i];
        word.id = 'word_' + words[i];
        word.href = '../food-town/' + words[i] + '/index.html';
        
        //update the styles for that element
        word.style.position = 'absolute';
        word.style.left = (i % 7)*14 + 5 + randomLeft + '%';
        word.style.top = (i % 3)*25 + 20 + randomTop + '%';
        word.style.transform = 'rotate('+randomRotate + 'deg)';

        //append the element to the DOM 
        document.getElementById("soup").appendChild(word);
    }

}

//this calls the function generateAllWords() every time the window loads
window.onload = () => {
    generateAllWords();
  };