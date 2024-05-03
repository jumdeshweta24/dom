const input= require("readline-sync");
const no = input.question("enter a year");
if (no%400==0){
    console.log("year is leap")
}
else if(no%100==0){
    console.log("not leap year");
}
else if(no%4==0){
    console.log("leap");
}
else{
    console.log("not")
}
