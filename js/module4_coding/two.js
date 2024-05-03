const readline=require("readline-sync");
const str1 = readline.question("string");
let pie_c=0
let map_c=0
for(let i=0;i<str1.length-2;i++){
    sub=str1.substring(i,i+3) 
    if(sub==='pie'){
        pie_c+=1 
    }
    else if(sub==='map'){
        map_c+=1
    }
}
let ans1=pie_c+map_c 
console.log(ans1);