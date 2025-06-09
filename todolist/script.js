let inputBox = document.getElementById("input-box")
let listContainer = document.getElementById("list-container")

function AddTask(){
    if(inputBox.value === ""){
        alert("you must write something")
        
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.append(li)
        let span = document.createElement("span")
        span.innerHTML = "&#10005"
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }

})

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()




