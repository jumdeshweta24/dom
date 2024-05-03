const input=require('readline-sync')
const N=parseInt(input.question("enter a N "))
const arr=[]
for(let i=0;i<N;i++){
    arr[i]=[]
   for(let j=0;j<N;j++){
    arr[i][j]=0
   }
}
let a=1
let i=0,j=0
while(a<=9){
    arr[i][j]=a 
    // if(j<N-1 && (i!==N-1)){
    //     j+=1;
    // }
    if(j<N-1 && i===0){
        j+=1;
    }
    else if( i<N-1 && j===N-1)
    {
        i+=1;
    }
    else if(i===N-1 && j!==0)
    {
        j-=1
    }
    
    else if(arr[i][j]===0 && (i===N-1 && j===0))
    {
        i-=1
    }
    a+=1
}
console.log(arr)