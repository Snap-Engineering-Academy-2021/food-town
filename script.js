// var surname = prompt('Greetings friend, what is your name?');
var toggle = true;

function onClick() {
    if (toggle) {
        document.getElementById("greeting").innerHTML = "Hello there ";
        toggle = false;
    } else {
        document.getElementById("greeting").innerHTML = "";
        toggle = true;
    }
};

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

function generateAllWords(){
    var words = ["ashwin", "pavan", "jenny", "danny", "kevin", "phoenix", "samara", "venus", "erica", "jonathan", "samantha", "ana", "jenna", "guido", "luis", "JT", "newsha", "ashley"];
    for (let i = 0; i < words.length; i++) {
        var randomLeft = Math.floor(Math.random() * (100)); 
        var randomTop = Math.floor(Math.random() * (80)) + 20; 

        var word = document.createElement('a');
        word.innerText = words[i];
        word.id = 'word_' + words[i];
        word.href = '';
        word.target = '_blank';
        word.style.position = 'absolute';
        word.style.left = randomLeft + '%';
        word.style.top = randomTop + '%';
        document.getElementById("soup").appendChild(word);
    }

}
