const input = document.getElementById("input");
const trash = document.getElementById("delete-button");
const clear = document.getElementById("clear")
let arr = []


function addItem(){
    let list = document.createElement("li")
    let divParent = document.createElement("div")
    let divChild = document.createElement("div")
    let editIcon = document.createElement("button")
    let deleteIcon = document.createElement("button")
    
    let item = input.value
    arr.push(item)
    localStorage.setItem("task", JSON.stringify(arr))
    console.log(localStorage.getItem("task"))

    divParent.className = "container";
    divParent.innerHTML = '<div>'+item+'</div>';
    divParent.addEventListener("dblclick", function(){
        divParent.style.textDecoration = "line-through"
    })

    editIcon.className = "edit-button"
    editIcon.innerHTML = '<img class = "icon" src= "https://cdn-icons-png.flaticon.com/128/1160/1160758.png">'
    editIcon.addEventListener("click", function(){
        divParent.contentEditable = true;
    })


    divChild.appendChild(editIcon)

    deleteIcon.className = "delete-button";
    deleteIcon.innerHTML = '<img class="icon" src="https://cdn-icons-png.flaticon.com/128/1215/1215092.png">';
    deleteIcon.addEventListener("click", function(){
        divParent.remove();
    })
    divChild.appendChild(deleteIcon)

    divParent.appendChild(divChild)

    list.appendChild(divParent)

    input.value = '';
    const myUl = document.getElementById("to-do")
    myUl.insertBefore(list, myUl.children[0])
}

clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})
