const readline=require("readline-sync");
const T = parseInt(readline.question("test cases: "));
for (let i = 0; i < T; i++) {
    const M = parseInt(readline.question("Enter the threshold value :"));
    const N = parseInt(readline.question("number of items on the list: "));

    const items = [];
    for (let j = 0; j < N; j++) {
        const input = readline.question("Enter the details (name quantity price):");
        const [name, quantity, price] = input.split(" ");
        items.push([name,parseInt(quantity), parseFloat(price)]);
    }
    let total=0 
    for(let j=0;j<N;j++){
        // console.log(items[j][1],items[j][2])
        let cal=items[j][1]*items[j][2];
        // console.log("cal",cal)
        total+=cal ;
    }
    if(total>M){
        DT=total-(total*10)/100; 
        console.log("discount",DT.toFixed(2))
    }
    else{
        console.log("total",total.toFixed(2))
    }
}