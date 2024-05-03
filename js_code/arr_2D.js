const input=require('readline-sync')
let arr=[];
let i=0,j=0;
while(i<3){
    arr[i]=[];
    j=0;
    console.log("enter the elements for new row")
    while(j<3){
        arr[i][j]=parseInt(input.question());
        j+=1
    }
    i+=1
}
console.log("2D array is",arr);
const brr=[]
for(let i=0;i<3;i++){
    s=0
    for(let j=0;j<3;j++){
        s+=arr[i][j]
        brr.push(s)
        //console.log("sum:",s)
    }
}
console.log("new sum array is",brr);