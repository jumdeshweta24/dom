
function switchoff(){

    var img_bulb=document.getElementById("bulbImage");
    img_bulb.src = "bulboff.jpeg";
    var img_cat=document.getElementById("catImage");
    img_cat.src = "offcat.jpeg";

    var b1=document.getElementById("off-switch");
    b1.style.backgroundColor="#cbd2d9";

    var b2=document.getElementById("on-switch");
    b2.style.backgroundColor="#22c55e"

    var h=document.querySelector("switch-status");
    h.innerText="switchstatus";
    
}
function switchon(){

    var img_bulb=document.getElementById("bulbImage");
    img_bulb.src = "bolbon.jpeg";
    var img_cat=document.getElementById("catImage");
    img_cat.src = "oncat.jpeg";

    var b1=document.getElementById("off-switch");
    b1.style.backgroundColor="#e12d39";

    var b2=document.getElementById("on-switch");
    b2.style.backgroundColor="#cbd2d9"

    var h=document.querySelector("switch-status");
    h.innerText="switchstatus";
    
}
