//marks 20
function perfect_no(N){
    let s=0;
    for(let i=1;i<N;i++){
        if(N%i==0){
            s+=i
        }
    }
    if(s==N){
        console.log("Perfect");
    }
    else{
        console.log("Not Perfect");
    }

}
const input=require('readline-sync');
const N=parseInt(input.question())
perfect_no(N);
