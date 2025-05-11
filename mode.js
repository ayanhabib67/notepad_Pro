

 let arr =[]
 let arr1 =[]
let viewHistory = document.getElementById("viewHistory")


let save =()=>{
    
    let noteTitle = document.getElementById("noteTitle")
    let node = document.getElementById("node")


if (noteTitle ==="" &&node===""){
   
    Swal.fire({
        icon: 'warning',
        title: 'Missing Input',
        text: 'Please fill this field!',
        confirmButtonColor: '#1e90ff'
      });    
}else{



    Swal.fire({
        icon: 'success',
        title: 'Saved!',
        text: 'Your note has been saved.',
        confirmButtonColor: '#1e90ff',
        timer: 2000,
        showConfirmButton: false
      });
      


    arr.push(noteTitle.value)
    arr1.push(node.value)
    
    localStorage.setItem("noteTitle",JSON.stringify(arr))
    localStorage.setItem("node", JSON.stringify(arr1))
    
    
    node.value=""
    noteTitle.value=""
}

}



let view = ()=>{

    viewHistory.innerHTML=""


    window.location = "view.html";

  
     
}

    






    let s5 = localStorage.getItem("noteTitle");
    let s6 = localStorage.getItem("node");

    if (s5 && s6 ) {
        arr = JSON.parse(s5);
        arr1 = JSON.parse(s6);
       
      } 