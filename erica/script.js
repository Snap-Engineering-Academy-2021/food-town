var toggle = false;

function onClickPizza()
{
    if (!toggle) 
    {
        document.getElementById("pizza").innerHTML = "This pizza is topped with BBQ sauce," +
        " smoked Gouda, red onions and fresh cilantro. You also have the option to top it with" +
        " bacon and pineapple. I highly suggest the pineapple. Once you are finished, for dessert," +
        " you can have the Butter Cake, which goes very well with this pizza.";
        toggle = true;
    } else 
    {
        document.getElementById("pizza").innerHTML = "";

        toggle = false;
    }

}


function onClickPasta()
{
    if (!toggle) 
    {
        document.getElementById("pasta").innerHTML = "If you are not completely " +
        "crazy about the pizza, this is the perfect dish for you. This dish is " +
        "a pasta that has fresh Italian parsley, and an option to top it with " +
        "chicken and/or shrimp, and Sauteed Cremini Mushrooms. This dish also " +
        "goes very well with the Butter Cake."
        
        toggle = true;
    } else 
    {
        document.getElementById("pasta").innerHTML = "";
        toggle = false;
    }

}