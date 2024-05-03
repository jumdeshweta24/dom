const bodyElement=document.body;
const div=document.createElement("div");
bodyElement.appendChild(div);
div.classList.add("background");
const heading1=document.createElement("h1");
div.appendChild(heading1);
heading1.classList.add("heading");
heading1.innerText="Chat";

const div1=document.createElement("div");
div.appendChild(div1);
div1.classList.add("whole");

const texts=["Hello,how are you?",
"Hi Varakumar, I am good.How are you?",
"I'm fine. I am learning HTML and css",
"HTML and CSS?",
"Yes,by doing projects parallelly, i am learning",
"Awesome,can you tell how are learning it",
"can i call you?"];


for(let i=0;i<texts.length;i++){
    const para=document.createElement("p");
    div1.appendChild(para);
    para.style.padding="12px";
    para.style.borderTopLeftRadius="12px";
    para.style.borderTopRightRadius="12px";
    if(i%2===0)
    {
        para.style.backgroundColor="#47a3f3";
        para.style.textAlign="right";
     
    }
    else
    {
        para.style.backgroundColor="#52606d";
        para.style.textAlign="left";
    }
    para.innerText=texts[i];
}


//css style
div.style.backgroundImage = 'url("https://i.ibb.co/RbV2JPr/chatbg-1.png")';
div.style.backgroundSize = "cover";
div.style.height = "100vh";

heading1.style.color="#ffffff";
heading1.style.backgroundColor="#323f4b";
heading1.style.fontSize="20px";
heading1.style.textAlign="center";
heading1.style.fontFamily="Roboto";
heading1.style.fontWeight="bold";
heading1.style.padding="14px";
 
div1.style.padding="14px";
div1.style.color="#ffffff";
div1.style.fontFamily="Roboto";
div1.style.fontSize="12px";