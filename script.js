
var toggle = true;
var bowlRadius = window.innerHeight/1.5;

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

//resize bowl based on window width and height 
function resizeBowl(){
    bowlRadius =  window.innerHeight/1.5;
    document.getElementById("bowl").style.height = bowlRadius + "px";
    document.getElementById("bowl").style.width = bowlRadius + "px";
}

//generateAllWords() is a function that takes all of our names and creates a link!
function generateAllWords(){
    var words = ["ashwin", "jenny", "danny", "kevin", "phoenix", "samara", "venus", "erica", "jonathan", "samantha", "ana", "jenna", "guido", "luis", "JT", "newsha", "ashley"];
    for (let i = 0; i < words.length; i++) {
        //generate some random percentages and degrees
        var randomLeft = Math.floor(Math.random() * (4)) + 35; 
        var randomTop = Math.floor(Math.random() * (4)) + 38; 

        //create a new element for each name in the list 
        var word = document.createElement('a');
        word.innerText = words[i];
        word.id = 'word_' + words[i];
        word.href = '../food-town/' + words[i] + '/index.html';

        //update the styles for that element
        word.style.position = 'absolute';
        word.style.left = ((i % 7)*4 + randomLeft)*window.innerWidth/100 + 'px';
        word.style.top = ((i % 5)*10 + randomTop)*window.innerHeight/100  + 'px';

        //append the element to the DOM 
        document.getElementById("soup").appendChild(word);
    }

}

//this calls the function generateAllWords() every time the window loads
window.onload = () => {
    resizeBowl();
    generateAllWords();
  };
