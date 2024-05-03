const bodyElement = document.body;
const div = document.createElement("div");
bodyElement.appendChild(div);
div.classList.add("out");

// Background Image
div.style.backgroundImage = 'url("https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?w=1380&t=st=1705607469~exp=1705608069~hmac=278471867b312bc0088e9ffac7a2f27addf229e5e57bacefa17334eee38448ad")';
div.style.backgroundSize = 'cover';
// div.style.backgroundPosition = 'center';
div.style.backgroundRepeat = 'no-repeat';

// Top Section
const div1 = document.createElement("div");
div.appendChild(div1);
div1.classList.add("top-section");

// Image
const imgElement = document.createElement("img");
imgElement.src = "https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?w=1380&t=st=1705607469~exp=1705608069~hmac=278471867b312bc0088e9ffac7a2f27addf229e5e57bacefa17334eee38448ad";
div1.appendChild(imgElement);

// Bottom Section
const div2 = document.createElement("div");
div.appendChild(div2);
div2.classList.add("bottom-div");

// Heading
const heading = document.createElement("h1");
div2.appendChild(heading);
heading.innerText = "Happy Meals";

// Paragraph
const para = document.createElement("p");
div2.appendChild(para);
para.innerText = "Discover the best foods over the 1,000 restaurants";
para.style.fontFamily="Roboto";
para.style.color="323f4b";

// Button
const button = document.createElement("button");
div2.appendChild(button);
button.innerText = "Book Now";


// Style top-sec
div1.style.width = "100%";
div1.style.height = "70vh";
div1.style.overflow = "hidden";

// Style bottom
div2.style.backgroundColor = "#f6c56e";
div2.style.color="#323f4b";
div2.style.fontWeight="bold"
div2.style.width = "100%";
div2.style.padding = "20px";
div2.style.borderTopLeftRadius = "15px";
div2.style.borderTopRightRadius = "15px";
div2.style.boxSizing = "border-box";


// Style button
button.style.backgroundColor = "#ffffff";
button.style.color = "black";
button.style.height="40px";
button.style.width="90px";
button.style.border="none";
button.style.borderRadius="5px"
button.style.fontFamily = "Roboto";
// Style heading
heading.style.fontFamily = "#323f4b";
div2.style.fontFamily = "Bree Serif";

