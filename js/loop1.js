const input=require("readline-sync");

let arr=[];
let i=0;
while(i<5){
    arr[i]=input.question();
    i=i+1 
}
console.log(arr);