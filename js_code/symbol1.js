console.log("This is tutorial 59");
const sym1=Symbol("My identifier");
const sym2=Symbol("My identifier");
console.log("symbol is",sym1)
console.log(sym1===sym2);
const a="this is"
const b="this is"
console.log(a===b)
console.log(null===null)
console.log(undefined===undefined)
const k1=Symbol('identifier for k1');
const k2=Symbol();
myobj={};
myobj[k1]="HArry"
myobj[k2]="Rohan"
myobj['name']="Good Day"
console.log(myobj[k1])
console.log(myobj.k2)
// for(key in myobj){
//     console.log(key,myobj[key])
// }
console.log(JSON.stringify(myobj))
let globalSym = Symbol.for("app.symbol");
let sameSymbol = Symbol.for("app.symbol");
console.log(globalSym === sameSymbol); 