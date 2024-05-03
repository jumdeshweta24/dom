let a=require("readline-sync")
let B = a.question('');
let i=0
let c=""
let d=0
while (i<B.length){
    if(B[i]==="p" && B[i+1]==="i" && B[i+2]==="e"){
        c=c+"x"
        d=d+1
    }
    else if(B[i]==="p" && B[i-1]==="a" && B[i-2]==="m"){
        c=c+"x"
        d=d+1
    }
    else{
        c=c+B[i]
    }
    i=i+1
}
console.log(d)