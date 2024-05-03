let a=require("readline-sync")

let N = a.questionInt('');

let i=0

let c=0

let f=0

let g=[]

while (i<N){

    let B = a.questionInt('');

    if(B===1){

        c=c+1

        let d = a.question('');

        g.push(c)

        g.push(d)

    }

    else if (B===2){

        let e = a.questionInt('');

        if (c>=e){

            console.log(e*10)

        }

    }

    else if (B===3){

        f=f+1

        let j=0

        while (j<c){

            if (){



            }

        }

    }

    i=i+1

}

console.log(g)