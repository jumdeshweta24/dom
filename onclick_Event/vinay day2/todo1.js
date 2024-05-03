// let todolist=[
//     {text:"learn html",unique:1},
//     {text:"learn Css",unique:2},
//     {text:"learn js",unique:3},
   
// ];

// //loop 
// for(let todo of todolist){
//     CreateAndAppend(todo)//function call;
    
// }


// function  CreateAndAppend(todo){
// const ulele=document.getElementById("todoItemsContainer")
// const todoele = document.createElement("li");
// todoele.classList.add("todo-item-container", "d-flex", "flex-row");
// ulele.appendChild(todoele);


// //input
// let inputele=document.createElement("input");
// inputele.classList.add("checkbox-input")
// inputele.type="checkbox";
// let checkboxId="checkbox"+todo.unique;
// inputele.setAttribute("id",checkboxId);
// inputele.addEventListener("change" ,function(){
//     label.style.textDecoration = inputele.checked ? "line-through" : "none";
// });


// todoele.appendChild(inputele); 

// //div
// let divele=document.createElement("div");
// divele.classList.add("d-flex", "flex-row", "label-container");
// todoele.appendChild(divele); 

// //label 
// let label=document.createElement("label");
// label.setAttribute("for",checkboxId);
// label.setAttribute("class","checkbox-label");
// label.textContent=todo.text;
// divele.appendChild(label);

// //div2
// let divele2=document.createElement("div");
// divele2.classList.add("delete-icon-container");
// divele.appendChild(divele2); 

// //i
// let iele=document.createElement("i");
// iele.classList.add("far", "fa-trash-alt", "delete-icon");
// divele2.appendChild(iele); 
// iele.onclick=function(){
//     todoele.remove();
// }

// }
// // add element by add button
// function add_ele(){
//     const text=document.getElementById("todoUserInput").value;
//     const new_ele={text:text,unique:todolist.length+1};
//     todolist.push(new_ele);
//     localStorage.setItem('todolist',JSON.stringify(todolist))
//     CreateAndAppend(new_ele);
//     document.getElementById("todoUserInput").value = "";
// }
// //delete element
// function delete_ele(todoid){
//     todolist=todolist.filter(todo=>todo.unique!==todoid);
//     localStorage.setItem('todolist',JSON.stringify(todolist));
//     document.getElementById(`todo${todoid}`).remove();
// }
// Initialize the todo list by retrieving from local storage or using an empty array
let todolist = JSON.parse(localStorage.getItem('todolist')) || [];

// loop
for (let todo of todolist) {
    CreateAndAppend(todo); // function call;
}

function CreateAndAppend(todo) {
    const ulele = document.getElementById("todoItemsContainer");
    const todoele = document.createElement("li");
    todoele.setAttribute("id", `todo${todo.unique}`); // set unique id for each todo item
    todoele.classList.add("todo-item-container", "d-flex", "flex-row");
    ulele.appendChild(todoele);

    //input
    let inputele = document.createElement("input");
    inputele.classList.add("checkbox-input");
    inputele.type = "checkbox";
    let checkboxId = "checkbox" + todo.unique;
    inputele.setAttribute("id", checkboxId);
    inputele.addEventListener("change", function () {
        label.style.textDecoration = inputele.checked ? "line-through" : "none";
    });

    todoele.appendChild(inputele);

    //div
    let divele = document.createElement("div");
    divele.classList.add("d-flex", "flex-row", "label-container");
    todoele.appendChild(divele);

    //label 
    let label = document.createElement("label");
    label.setAttribute("for", checkboxId);
    label.setAttribute("class", "checkbox-label");
    label.textContent = todo.text;
    divele.appendChild(label);

    //div2
    let divele2 = document.createElement("div");
    divele2.classList.add("delete-icon-container");
    divele.appendChild(divele2);

    //i
    let iele = document.createElement("i");
    iele.classList.add("far", "fa-trash-alt", "delete-icon");
    divele2.appendChild(iele);
    iele.onclick = function () {
        delete_ele(todo.unique); // call the delete function
    };
}

// add element by add button
function add_ele() {
    const text = document.getElementById("todoUserInput").value;
    if (text.trim() !== "") {
        const new_ele = { text: text, unique: todolist.length + 1 };
        todolist.push(new_ele);
        localStorage.setItem('todolist', JSON.stringify(todolist));
        CreateAndAppend(new_ele);
        document.getElementById("todoUserInput").value = "";
    }
}

// delete element by delete button
function delete_ele(todoid) {
    todolist = todolist.filter(todo => todo.unique !== todoid);
    localStorage.setItem('todolist', JSON.stringify(todolist));
    document.getElementById(`todo${todoid}`).remove();
}

