//declaration
var plusbtns = Array.from (document.querySelectorAll(".fa-plus-circle"));
var minus = Array.from (document.querySelectorAll(".fa-minus-circle"));
var favs = Array.from (document.querySelectorAll(".fa-heart"));
var cards = Array.from (document.querySelectorAll(".card"));
var deletebtns = Array.from(document.querySelectorAll(".fa-trash-alt"));
console.log('hello')

//deletebtns
for ( let i in deletebtns) {
 deletebtns[i].addEventListener("click", function (){
cards[i].remove();
Total();
});
}

//fav btn
for ( let fav of favs){
    fav.addEventListener("click", function(){
if (fav.style.color == "black") {
    fav.style.color = "red";}
    else
    {fav.style.color = "black";}
    });
   
}

//button plus
for (let plus of plusbtns){
    plus.addEventListener ("click", function(){
        plus.nextElementSibling.innerHTML++;
        Total();
    });
}

//minus btn
for ( let min of minus){
    min.addEventListener ("click",function(){
        min.previousElementSibling.innerHTML> 0 ? min.previousElementSibling.innerHTML-- : null;
        Total();
    });
    
}

//total price
function Total (){
    let qte = Array.from(document.querySelectorAll(".qute"));
    let price = Array.from(document.querySelectorAll(".unitt-price"));

    let s = 0;
    for (let i = 0; i < price.length; i++) {
        s = s + price[i].innerHTML * qte[i].innerHTML;
    }
    document.getElementById("total-price").innerHTML = s;
}