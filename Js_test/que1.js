const input=require('readline-sync')
const N=parseInt(input.question("enter a N size of array"))
const arr=[]
for(let i=0;i<N;i++){
    arr[i]=parseFloat(input.question())
}
let max_n=Math.max(...arr)
let min_n=Math.min(...arr)
const obj1={min:min_n,
max:max_n }
console.log(obj1)