const bodyElement = document.body;
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
// checkbox.id = "mycheckbox"; 
checkbox.setAttribute("id","mycheckbox");
bodyElement.appendChild(checkbox);
//label
let labelEle=document.createElement("label");
// labelEle.htmlFor="mycheckbox";
//for set attribute
labelEle.innerText="graduated";
bodyElement.appendChild(labelEle);
labelEle.setAttribute("for","mycheckbox");

