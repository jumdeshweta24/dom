// function one(){
//     console.log("function 1");
// }
// function two(){
//     console.log("function two");
// }
// function three(){
//     console.log("function three");
// }
// setTimeout(one,2000);
// three();
// two();

//another way
function one()
{
    setTimeout(function(){
        console.log("function 1");
    },3000)
    function two(){
        console.log("function one");
    }    
}
function two(){
    console.log("function 2")
}
one();
two();