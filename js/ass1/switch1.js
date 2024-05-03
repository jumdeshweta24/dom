const input=require("readline-sync");
const n=input.question("enter a number");
switch(n){
    case '1':
        console.log("one");
        break;
    case '2':
        console.log("Two");
        break;
    case '3':
        console.log("three");
        break;
    default:
        console.log("THis is number");
}
console.log("byee..");