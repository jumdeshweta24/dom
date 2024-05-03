// const sum=(a,b)=>{
//     console.log("Yes i am reunning",a+b);

// }
// setTimeout(sum,1000,1,2);

const sum=(a,b)=>{
    console.log("Yes i am reunning continuesly",a+b);

}
let timeid=setInterval(sum,1000,1,2);
// if (timeid===5){
//     clearInterval(timeid);
// }
console.log(timeid,"this is i")