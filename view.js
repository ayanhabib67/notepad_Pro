

let home =()=>{
    window.location.href = "node.html"
    
    
}


let viewHistory = document.getElementById("viewHistory")

let randerFunction=()=>{
    viewHistory.innerHTML=""
    if(viewHistory){

        
        for (let i = 0; i < save1.length; i++) {
            
            viewHistory.innerHTML+=` <h2 class="note-title">${save1[i]}</h2>  <br><br><h4 class="note-body">${save2[i]}</h4> <br><br><button   class="danger" onclick="deleteTitle(${i})">delete</button>                     <button  class="secondary" onclick="edit(${i})">edit</button>  <br><br>`
        }
    }

}





    let save1 = JSON.parse(localStorage.getItem("noteTitle"))
    let save2 = JSON.parse(localStorage.getItem("node"))



        randerFunction()


let deleteTitle =(index)=>{
    viewHistory.innerHTML=""
    save1.splice(index ,1)
    save2.splice(index ,1)

    randerFunction()

  localStorage.setItem("node", JSON.stringify(save2));

}




let edit =(index)=>{
    let updatedValue = prompt("Enter your updated Node")
    save2.splice(index,1,updatedValue)
    randerFunction()
    localStorage.setItem("noteTitle", JSON.stringify(save1));
  localStorage.setItem("node", JSON.stringify(save2));
}


let ClearAll =()=>{

  localStorage.removeItem("noteTitle")
  localStorage.removeItem("node")

// localStorage.clear()
    viewHistory.innerHTML=""
    window.location.reload();

}


