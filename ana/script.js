var toggle = true;
function onClick(){
    if(toggle){
    document.getElementById("pesto").innerHTML = "Pesto..." + Date();
    toggle = false; 
} else {
    document.getElementById("pesto").innerHTML = ""; 
    toggle = true;
 }
};