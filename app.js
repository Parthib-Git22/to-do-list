const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // there is a cross symbol at the end of each task in to-do list
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    // whenever we add any task the data get saved
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); // LI is the parent element
        saveData();
    }
},false);

// function to save the to-do list data so that it does not go away on refreshing the browser page
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// to display the data whenever we open the browser again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();