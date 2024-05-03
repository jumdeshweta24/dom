const readline = require("readline-sync");
const binaryStr = readline.question("Enter the binary string: ");

const [start, end] = readline.question("Enter the start and end range to flip (space-separated): ").split(" ").map(Number);

let new_str=[]
for(let i=0;i<=binaryStr.length;i++){
    if(i>=start && i<=end){
        if(binaryStr[i]==='1')
        {
            new_str.push('0')
        }
        else{
            new_str.push('1')
        }

    }
    else{
        new_str.push(binaryStr[i])
    }
   
}
console.log("flip string",new_str.join(""))