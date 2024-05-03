const input=require('readline-sync')
const N=parseInt(input.question("enter a N size of array"))
const arr=[]
for(let i=0;i<N;i++){
    arr[i]=parseFloat(input.question())
}
const brr=[]
let s=0
for(let j=0;j<N;j++){
    s+=arr[j];
    brr[j]=s;
}
console.log(brr);