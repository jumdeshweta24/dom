const input=require('readline-sync')
const L=parseInt(input.question("enter a N size of first array"))
const arr=[]

let j=0;
for(let i=0;i<L;i++){
    arr[i]=input.question()

}
const M=parseInt(input.question("enter a N size of first array"))
const brr=[]
for(let i=0;i<M;i++){
    brr[i]=input.question()
}
const N=parseInt(input.question("enter a N size of first array"))
const crr=[]
for(let i=0;i<N;i++){
    crr[i]=input.question()
}
let s1=new Set(arr)
let arr1=Array.from(s1)
let s2=new Set(brr)
let brr1=Array.from(s2)
let s3=new Set(crr)
let crr1=Array.from(s3)
let new_arr=[...arr1,...brr1,...crr1]
// console.log("new_array is",new_arr);
let s=new Set(new_arr)
let arr2=Array.from(s)
let rep_arr=[]
for(let j=0;j<arr2.length;j++){
    // console.log("array2",arr2[j])
    c=0
    for(let i in new_arr){
        if(new_arr[i]===arr2[j])
        {
            c+=1
        }
        
    }
    if(c===3){
        rep_arr.push(arr2[j])
    }
}
console.log(rep_arr)
