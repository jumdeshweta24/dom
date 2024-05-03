srr=[10,4,5,23,54,1];
a=Math.min(10,4,5,23,54,1);
console.log(a);
function my_arrr_max(srr){
    return Math.max.apply(null,srr);
}
a=my_arrr_max(srr);
console.log(a)