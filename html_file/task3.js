const bodyElement=document.body;
const div=document.createElement("div");
bodyElement.appendChild(div);
div.classList.add("bimage", "d-flex", "flex-column", "justify-content-center");

const heading1=document.createElement("h1");
div.appendChild(heading1);
heading1.classList.add("top");
heading1.textContent="Code is more than some bytes is a file";

//style bimage class
div.style.backgroundImage='url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/codingbg.png")';
div.style.backgroundSize="cover";
div.style.height="100vh";
div.style.padding="30px";
div.style.borderColor="#48ee59";
div.style.borderWidth="5px";
div.style.borderStyle="solid";

//style to heading
heading1.style.color="white";
heading1.style.fontFamily="Bree Serif";
heading1.style.backgroundColor="#00000080";
heading1.style.padding="15px";
heading1.style.fontSize="30px";
