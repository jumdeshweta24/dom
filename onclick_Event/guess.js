let val=Math.ceil(Math.random()*100)
let c=0;
const maxChances = 7;
console.log(val);
function check()
{
    if (c< maxChances)
    {
        let number=document.getElementById("ip");
        let  your_no=parseInt(number.value);
    
        let p=document.getElementById("para");
        if (your_no<val)
        {
            p.innerText = `${your_no} is less than the guess number`;
        }   
        else if(your_no>val){
            p.innerText=`${your_no} is greater than guess number`
        }
        else
        {
            p.innerText=`${your_no} guess correctly`;

        }
        c+=1;
    }
    else {
        let p = document.getElementById("para");
        p.innerText = `You have used all your chances. The correct number was ${val}. Game over!`;
    }

}