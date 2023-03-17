const input = document.getElementById("input");
const pee = document.getElementById("p");
const deleteButton = document.getElementById("delete-button")
const editButton = document.getElementById("edit-button")
const addButton = document.getElementById("add")



pee.innerHTML = localStorage.getItem("value")

input.addEventListener("keyup", display);

//function display(){
 //   pee.innerHTML = input.value;  //without local storage
//}
function display(){
    localStorage.setItem("value", input.value);
    pee.innerHTML = localStorage.getItem("value")
}

//syntax
//localStorage.setItem("keyName", input.value);//input.value is what you want to save
function editing(){
    pee.contentEditable = true;
}
editButton.addEventListener("click", editing)

function remove(){
    localStorage.removeItem("value");
    pee.innerHTML = "";
}
deleteButton.addEventListener("click", remove)
 
const container = document.getElementById("container");

function repeat(){
    for (let i = 0; i < 100; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
    }
}
addButton.addEventListener("click", repeat)