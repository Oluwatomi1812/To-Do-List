const toDoItems = document.getElementsByClassName("to-do")[0];
const input = document.getElementById("input");
const trash = document.getElementById("delete-button");



input.addEventListener("Keyup", function(event){
    if(event.key === "Enter")
    addItem();
})
function addItem(){
    let divParent = document.createElement("div")
    let divChild = document.createElement("div")
    let editIcon = document.createElement("button")
    let deleteIcon = document.createElement("button")

    divParent.className = "container";
    divParent.innerHTML = '<div>'+input.value+'</div>';
    divParent.addEventListener("dblclick", function(){
        divParent.style.textDecoration = "line-through"
    })

    editIcon.className = "edit-button"
    editIcon.innerHTML = '<img class = "icon" src= "https://cdn-icons-png.flaticon.com/128/1160/1160758.png">'
    editIcon.addEventListener("click", function(){
        divParent.contentEditable = true;
    })


    toDoItems.innerHTML = localStorage.getItem("tasks")

input.addEventListener("keyup", display)

function display(){
localStorage.setItem("tasks", input.value)
toDoItems.innerHTML = localStorage.getItem("tasks")
}




    divChild.appendChild(editIcon)

    deleteIcon.className = "delete-button";
    deleteIcon.innerHTML = '<img class="icon" src="https://cdn-icons-png.flaticon.com/128/1215/1215092.png">';
    deleteIcon.addEventListener("click", function(){
        divParent.remove();
    })
    divChild.appendChild(deleteIcon)

    divParent.appendChild(divChild)

    toDoItems.appendChild(divParent)

    input.value = '';
}


toDoItems.insertBefore(div, list.children[0]);