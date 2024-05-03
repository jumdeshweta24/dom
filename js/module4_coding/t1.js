let a=require("readline-sync")

let B = a.questionInt('');

let Q = a.questionInt('');

let N=a.questionInt('');

let i=0

let c=[]

while (i<N){

    let P = a.questionInt('');

    let R = a.questionInt('');

    if (P*Q<=B && R>=Q){

        c.push(P)

    }

    i=i+1

}

console.log(c)

