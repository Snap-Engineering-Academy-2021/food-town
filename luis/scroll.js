function quickMessage() {
    alert("Quick test alert");
    var y = window.scrollY;
    console.log(y);
}

var contentNum = 1;
var text = {
    1: { 
        title: "Food Recipe",
        paragraph: [
            "Chilaquiles"
        ]
    },
    2: {
        title: "Overview",
        paragraph: [
            "Chilaquiles is a traditional Mexican breakfast dish consisting of corn tortillas cut into quarters and lightly fried.",
            "Typically, corn tortillas cut into quarters and lightly fried or baked for a lighter version are the basis of the dish. Green or red salsa is poured over the crisp tortilla triangles. The mixture is simmered until the tortilla starts softening. Pulled chicken is sometimes added to the mix. It is commonly garnished with crema, crumbled queso fresco, sliced onion, and avocado slices. Chilaquiles can be served with refried beans, eggs (scrambled or fried) and guacamole as side dishes."
        ]
    },
    3: {
        title: "Ingredients",
        paragraph: [
            "* 1 tablespoon vegetable oil",
            "* 3 cups of tortilla chips",
            "* 1 1/4 cups of green or red salsa",
            "* 1/2 cup crumbled Cojita cheese",
            "* 2 tablespoons of cream"
        ]
    },
    4: {
        title: "Instructions",
        paragraph: [
            "1. Gather the ingredients.",
            "2. Lightly coat a large frying pan with vegetable oil. Heat over medium-high heat until oil shimmers.",
            "3. Spread tortilla chips in pan.",
            "4. Quickly pour salsa over chips and reduce heat to medium-low. Simmer the chips in sauce, undisturbed, until chips absorb some of the liquid and soften, for approximately 10 minutes.",
            "5. Divide chilaquiles between two plates; sprinkle half of the cheese on each and drizzle with half of the crema."
        ]
    }
}

// var description = document.createElement('p').innerText(text[contentNum].title);

// document.getElementById("c1").appendChild(description);
function removeChild(parent) {

    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}


function prev() {

    let title = text[contentNum].title;
    let lines = text[contentNum].paragraph;
    let parent = document.getElementById('c1');
    
    removeChild(parent);
    

    if (contentNum === 1) {
        contentNum = 4;

        title = text[contentNum].title;
        lines = text[contentNum].paragraph;

        let td = document.createElement('h2');
        td.innerHTML = title;
        document.getElementById('c1').appendChild(td);

        lines.forEach(element => {
            console.log(element);
            let description = document.createElement('p');
            description.innerHTML = element;
            document.getElementById('c1').appendChild(description);
        });
    } else {

        let td = document.createElement('h2');
        td.innerHTML = title;
        document.getElementById('c1').appendChild(td);

        lines.forEach(element => {
            console.log(element);
            let description = document.createElement('p');
            description.innerHTML = element;
            document.getElementById('c1').appendChild(description);
        });
    }

    contentNum--;
}

function next() {

    let title = text[contentNum].title;
    let lines = text[contentNum].paragraph;
    let parent = document.getElementById('c1');
    
    removeChild(parent);

    if (contentNum === 4) {
        contentNum = 1;

        title = text[contentNum].title;
        lines = text[contentNum].paragraph;

        let td = document.createElement('h2');
        td.innerHTML = title;
        document.getElementById('c1').appendChild(td);

        lines.forEach(element => {
            console.log(element);
            let description = document.createElement('p');
            description.innerHTML = element;
            document.getElementById('c1').appendChild(description);
        });
    } else {

        let td = document.createElement('h2');
        td.innerHTML = title;
        document.getElementById('c1').appendChild(td);

        lines.forEach(element => {
            console.log(element);
            let description = document.createElement('p');
            description.innerHTML = element;
            document.getElementById('c1').appendChild(description);
        });
    }

    contentNum++;
    
    // text[2].paragraph.forEach(element => {
    //    console.log(element); 
    // });
}