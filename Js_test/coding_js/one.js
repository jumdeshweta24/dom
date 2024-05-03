//marks 10
const input=require('readline-sync');
const a=parseInt(input.question())
const b=parseInt(input.question());
const c=parseInt(input.question());
let ans;
if((a===b)&&(b===c)&&(a==c)){
    console.log("equal3");
    ans=a*b*c;
    console.log(ans);
}
else if(a===b || b===c || a===c){
    console.log("this is else if");
    if(a===b){
        ans=(a+b)%c;
        console.log(ans);
    }
    else if(b===c){
        ans=(b+c)%a;
        console.log(ans);
    }
    else{
        ans=(a+c)%b;
        console.log(ans);
    }
}
else{
    let z=Math.max(a,b,c);
    ans=Math.pow(z,2);
    console.log(ans);
}
