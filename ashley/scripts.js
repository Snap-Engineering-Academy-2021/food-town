let input = document.querySelector('input')
let str = "";
input.addEventListener('keypress', function(event){
   let letter = event.key;
    str += letter;
    console.log(str)

   

 document.querySelector('#name').innerHTML = str
})