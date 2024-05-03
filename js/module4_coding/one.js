const readline=require("readline-sync");
const B = parseInt(readline.question("budget"));
const Q = parseInt(readline.question("quantity"));
obj1={} 

for (let i = 0; i < 5; i++) {
    const P = parseInt(readline.question("price of t-shirt:"));
    const R = parseInt(readline.question("avi quantity:"));
    tshirt_p=Q*P
    if(tshirt_p<=B && Q<=R){
        obj1[i+1]={}
        obj1[i+1]['price']=tshirt_p 
        obj1[i+1]['quantity']=Q
    }
}
// console.log(obj1)
let sortedKeys = Object.keys(obj1).sort((a, b) => obj1[a].price - obj1[b].price);
let sortedObj = {};

sortedKeys.forEach(key => {
    sortedObj[key] = obj1[key];
});

let sortedKeys1= Object.keys(sortedObj);
// console.log("sortedkeys1",sortedKeys1)
let firstKey = sortedKeys1[0];
console.log(firstKey);

