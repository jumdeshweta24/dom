const input=require("readline-sync");
const mem=input.question("enter membership status gold/silver/regular/non-mem");
const amt1=parseFloat(input.question("enter amount"));
let bill=amt1;
let fb=amt1;
if (mem==="gold" && amt1>50){
    fb=bill-bill*(15/100);
}
else if(mem==="silver" && amt1>75){
    fb=bill-bill*(10/100);
}
else if(mem=="reg" && amt1>100)
{
    fb=bill-bill*(10/100);
}
else if(mem==="non-mem" && amt1>150)
{
    fb=bill-5;
}

console.log(fb);