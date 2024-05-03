//rest
function add_no(a,b,c,...other){
    console.log(other)
    return a+b+c;
}
const res=add_no(2,5,6,8,9);
console.log(res);

//spred
var names=['ajay','anuj','vivek','ram','shyam'];
function get_names(name1,name2,name3,name4,name5){
    console.log(name1,name2,name3,name4,name5)
}
get_names(...names);

// get_names(names[0],names[1],names[2]);