function turnOnRed(){
    resetColors();
    const stopButton=document.getElementById("stopButton");
    stopButton.style.backgroundColor="Red";

    const stop_div=document.getElementById("stopLight");
    stop_div.style.backgroundColor="Red";
}
function turnOnYellow(){
    resetColors();
    const readyButton=document.getElementById("readyButton");
    readyButton.style.backgroundColor="yellow";

    const ready_div=document.getElementById("readyLight");
    ready_div.style.backgroundColor="yellow";
    
}
function turnOnGreen(){
    resetColors();
    const goButton=document.getElementById("goButton");
    goButton.style.backgroundColor="green";
    
    const go_div=document.getElementById("goLight");
    go_div.style.backgroundColor="green";
    
}
function resetColors(){
    const button=document.querySelectorAll('.button');
    button.forEach(button=>{
        button.style.backgroundColor="";
    })
    
    const lights=document.querySelectorAll('.bulb');
    lights.forEach(light=>{
        light.style.backgroundColor="";
    });
}
