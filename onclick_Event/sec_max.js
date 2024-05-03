const input=require('readline-sync');
let a=parseInt(input.question())
let b=parseInt(input.question())
let c=parseInt(input.question())
let d=parseInt(input.question())
if (a>b){
    max1=a;
    smax1=b ;
}
else{
    max1=b;
    smax1=a ;
}
if(c>d){
    max2=c;
    smax2=d;
}
else{
    smax2=c
    max2=d
}
if(max1>max2){
    if(max2>smax1){
        console.log(max2)
    }
    else{
        console.log(smax1)
    }
}
else{
    if(max1>smax2){
        console.log(max1);
    }
    else{
        console.log(smax2)
    }
}