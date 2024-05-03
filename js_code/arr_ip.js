const input=require('readline-sync');
let arr=[];
let idx=0;
while(idx<5){
    arr[idx]=parseInt(input.question());
    idx+=1;
}
arr.sort((a,b)=>a-b);
console.log(arr);