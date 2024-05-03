const input=require("readline-sync");
const userInput = input.question("Enter temperature and Enter raining or not 0/1 (separated by space): ");
const [T, R] = userInput.split(" ").map(Number);
let tempfar=(9/5)*T + 32 
if (R==0){
        if(tempfar<50){
            console.log("wear a heavy coat and bring an umbrella.")
        }
        else if(tempfar>=50 && tempfar<68)  
        {
            console.log("user to wear a light jacket.")
        }
        else if(tempfar>=68)
        {
            console.log("wear light clothing.")
        }
    

    }
else{
    if(tempfar<50)
    {
        console.log("wear a heavy coat and bring an umbrella.")
    }
    else if(tempfar>=50 && tempfar<68)
    {
        console.log("wear a light jacket and bring an umbrella.")
    }
    else if(tempfar>=68)
    {
        console.log("wear light clothing and bring an umbrella.")
    }
}