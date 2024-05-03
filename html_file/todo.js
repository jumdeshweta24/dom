const bodyElement = document.body;
const div = document.createElement("div");
bodyElement.appendChild(div);
div.classList.add("cont");

div.style.backgroundImage='url("https://img.freepik.com/free-photo/books-assortment-with-dark-background_23-2148898297.jpg?t=st=1709287274~exp=1709290874~hmac=f4aa01474040ddb616c8e3f941c9ebaa8312e97f36d515957bea3c678bb9d23c&w=740")';
div.style.backgroundSize='cover';
div.style.height='700px';
div.style.color="white";
div.style.textAlign="center"


//heading
const heading=document.createElement("h1");
heading.innerText="Todolist";
div.appendChild(heading);

//paragraph 
const para1=document.createElement("p");
para1.innerText="Each day I will accomplish one thing on my todo list.";
div.appendChild(para1);

//heading2
const heading2=document.createElement("h4");
heading2.innerText="Read Book";
div.appendChild(heading2);
heading2.style.textAlign="left"

//paragraph2
const para2=document.createElement("p");
para2.innerText="I don't thin that the human race will survive the next thousand years, unless we spread into space. There are too many accidents that can befall life on a single planet.But I'm an optimist...";
div.appendChild(para2);
para2.style.textAlign="left"

const button=document.createElement("button");
button.innerText="Start";
div.appendChild(button);
button.style.backgroundColor="orange";
button.style.height="40px";
button.style.width="70px"
button.style.color = "white";
button.style.fontWeight="bold";
button.style.fontSize = "16px"; 

////paragraph3
const para3=document.createElement("p");
para3.innerText="Don't skip introduction";
div.appendChild(para3);
para3.style.textDecoration="underline";

