//UPON RELOAD RUN LOADTASK FUNCTION
window.onload = loadTasks;

const myUl = document.getElementById("to-do")
const input = document.getElementById("input");
const clear = document.getElementById("clear")
let arr = []

//TO DISPLAY TASK IN A CONTAINER 
function addItem(){
    //ADD TO LOCAL STORAGE
    let item = input.value
    arr.push(item)
    console.log(arr)
    let task = JSON.stringify(arr)
    localStorage.setItem("task", task)
    let tasks =  localStorage.getItem("task")
   
    //IF USER DOES NOT ENTER TASK
    if (input.value == ""){
        alert("Please enter a task to do")
    }
    else{

    let list = document.createElement("li")
    let divParent = document.createElement("div")
    let divChild = document.createElement("div")
    let editIcon = document.createElement("button")
    let deleteIcon = document.createElement("button")
   
   
    //DISPLAY INPUT ON PAGE
     divParent.className = "container";
     divParent.innerHTML = '<div>'+item+'</div>';
     divParent.addEventListener("dblclick", function(){
         divParent.style.textDecoration = "line-through"
     })

     //MAKING EDIT BUTTON FUNCTIONAL
    editIcon.className = "edit-button"
    editIcon.innerHTML = '<img class = "icon" src= "https://cdn-icons-png.flaticon.com/128/1160/1160758.png">'
    editIcon.addEventListener("click", function(){
        divParent.contentEditable = true;
    })
    //INSERTING IT TO A DIV
    divChild.appendChild(editIcon)

    //MAKING DELETE BUTTON FUNCTIONAL
    deleteIcon.className = "delete-button";
    deleteIcon.innerHTML = '<img class="icon" src="https://cdn-icons-png.flaticon.com/128/1215/1215092.png">';
    deleteIcon.addEventListener("click", function(event){
        divParent.remove()
        tasks.forEach((task) => {
          let tasks = localStorage.getItem("tasks")
          task.splice(1, 1);
          localStorage.setItem("tasks", task)
          });
    })
    //INSERTING IT TO A DIV
    divChild.appendChild(deleteIcon)

    divParent.appendChild(divChild)

    list.appendChild(divParent)

    input.value = '';

    //ORDER OF DISPLAY
    myUl.insertBefore(list, myUl.children[0])
}
}

function loadTasks() {
    //CALLING ITEM FROM LOCAL STORAGE
    let tasks = Array.from(JSON.parse(localStorage.getItem("task")));
  
    //CALLING EACH ITEM ONE BY ONE
    tasks.forEach((task) => {
      const list = document.getElementById("reload");
      const divParent = document.createElement("div");
      let divChild = document.createElement("div")
      let editIcon = document.createElement("button")
      let deleteIcon = document.createElement("button")
     
      //ADDING THE ITEM TO AN DIV
      divParent.className = "container";
      divParent.innerHTML = task
      divParent.addEventListener("dblclick", function(){
        divParent.style.textDecoration = "line-through"
       })
  
       //ADDING THE EDIT BUTTON BACK
      editIcon.className = "edit-button"
      editIcon.innerHTML = '<img class = "icon" src= "https://cdn-icons-png.flaticon.com/128/1160/1160758.png">'
      editIcon.addEventListener("click", function(){
        divParent.contentEditable = true;
      })
  
  
      divChild.appendChild(editIcon)
      
      //ADDING THE DELETE BUTTON BACK
      deleteIcon.className = "delete-button";
      deleteIcon.innerHTML = '<img class="icon" src="https://cdn-icons-png.flaticon.com/128/1215/1215092.png">';
      deleteIcon.addEventListener("click", function(){
        divParent.remove();
      })

      //APPENDING THE ELEMENTS
      divChild.appendChild(deleteIcon)
  
      divParent.appendChild(divChild)
  
      list.appendChild(divParent)
      
      list.insertBefore(divParent, list.children[0])
    }
    );
}

//CLEARING LOCAL STORAGE
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
}
)
console.log("ALL DONE")