const input = document.getElementById("input");
const pee = document.getElementById("p");
const deleteButton = document.getElementsByClassName("delete-button")
const editButton = document.getElementsByClassName("edit-button")
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
    localStorage.removeItem("value");var
    div = this.parentElement;
    div.style.display = "none";
}
deleteButton.addEventListener("click", remove)
 
const container = document.getElementById("container");



addButton.onclick = function(){
    if(input.value.length == 0){
        alert("Enter what you want to")
    }
    else{
        document.querySelector("#ul").innerHTML += `
        <li>
            <div class ="todo">
                <p class="taskname">
                ${input.value}
                </p>
                <button class="edit-button"><img class = "icon" src= "https://cdn-icons-png.flaticon.com/128/1160/1160758.png"></button>
                <button class="delete-button"><img class="icon" src="https://cdn-icons-png.flaticon.com/128/1215/1215092.png"></button> 
            </div>
        </li>
     `
    }
}
addButton.addEventListener("click", add)