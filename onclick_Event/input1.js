const arr=[]
for(let i=0;i<=5;i++){
  const number1=require('readline-sync');
  let a=number1.question("enter a elements");
  arr.push(a);
}
arr.sort((a,b)=>b-a
)
let s=new Set(arr)
console.log(arr);
console.log("this is set",s)


