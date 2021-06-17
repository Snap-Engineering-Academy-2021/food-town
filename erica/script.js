var togglePizza = false;
var togglePasta = false;
var toggleDessert = false;

function onClickPizza()
{
    var img = document.createElement('img');
    img.src = '../assets/BBQChickenPizza.jpeg';
    if (!togglePizza) 
    {
        document.getElementById("pizza").innerHTML = "This pizza is topped with BBQ sauce," +
        " smoked Gouda, red onions and fresh cilantro. You also have the option to top it with" +
        " bacon and pineapple. I highly suggest the pineapple. Once you are finished, for dessert," +
        " you can have the Butter Cake, which goes very well with this pizza.";
        
        document.getElementById("pizza").appendChild(img);

        togglePizza = true;
    } else 
    {
        document.getElementById("pizza").innerHTML = "";
        
        togglePizza = false;
    }
    
}


function onClickPasta()
{
    var img = document.createElement('img');
    img.src = '../assets/garlicCreamFettuccine.jpeg';

    // linebreak = document.createElement("br");

    if (!togglePasta) 
    { 
        
        // document.getElementById("pasta").appendChild(linebreak);
        
        document.getElementById("pasta").innerHTML = "If you are not completely " +
        "crazy about the pizza, this is the perfect dish for you. This dish is " +
        "a pasta that has fresh Italian parsley, and an option to top it with " +
        "chicken and/or shrimp, and Sauteed Cremini Mushrooms. This dish also " +
        "goes very well with the Butter Cake.";
        
        document.getElementById("pasta").appendChild(img);

        togglePasta = true;
    } else 
    {
        document.getElementById("pasta").innerHTML = "";
        togglePasta = false;
    }

}

function onClickDessert()
{
    var img = document.createElement('img');
    img.src = '../assets/butterCake.jpeg';

    var img2 = document.createElement('img');
    img2.src = '../assets/saltedCaramelPudding.jpeg';

    linebreak = document.createElement("br");

    // var t = document.createTextNode("Salted Caramel Pudding");

    if (!toggleDessert) 
    { 
        // document.getElementById("dessert").appendChild(linebreak);
        document.getElementById("dessert").innerHTML+= "Butter Cake";
        document.getElementById("dessert").appendChild(linebreak);
        // document.getElementById("dessert").style.textAlign = "center";
        document.getElementById("dessert").appendChild(img);
        // document.getElementById("dessert").appendChild(linebreak);
        // document.getElementById("dessert").appendChild("Salted Caramel Pudding");
        // innerHTML.appendChild(t);
        // document.getElementById("dessert").textContent = "Salted Caramel Pudding";
        // document.getElementById("dessert").insertBefore("Salted Caramel Pudding");
        // document.getElementById("dessert").appendChild(linebreak);
        // document.getElementById("dessert").append(linebreak);
        document.getElementById("dessert").innerHTML += "<br> <br>";
        document.getElementById("dessert").innerHTML+= "Salted Caramel Pudding";
        document.getElementById("dessert").appendChild(linebreak);
        document.getElementById("dessert").appendChild(img2);

        toggleDessert = true;
    } 
    else 
    {
        document.getElementById("dessert").innerHTML = "";
        toggleDessert = false;
    }
}