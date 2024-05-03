//marks 20
function common_ele(arr1,arr2){
    let new_arr=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                new_arr.push(arr1[i])
            }
        }
    }
    console.log(new_arr);
}
const arr1= [10, 20, 30];
const arr2=[];
common_ele(arr1,arr2);
