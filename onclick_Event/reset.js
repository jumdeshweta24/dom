function onIncre(){
    let para_ele=document.getElementById("para");
    let para_text=para_ele.textContent ;
    let c_text=parseInt(para_text)+1;
    para_ele.textContent=c_text ;
    para_ele.style.color="Green"; 

}
function onDec(){
    let para_d=document.getElementById("para");
    let para_text1=para_d.textContent ;
    let c_text1=parseInt(para_text1)-1;
    para_d.textContent=c_text1 ;
    para_d.style.color="Red"; 

}
function onReset(){
    let para_r=document.getElementById("para");
    let c_text2=parseInt(0);
    para_r.textContent=c_text2 ;
    para_r.style.color="black"; 
}
