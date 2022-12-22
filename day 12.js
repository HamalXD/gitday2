let input = document.getElementById("input")
let button = document.getElementById("button")
let ul = document.getElementById("ull")

const createElement = ()=>{
    const listitems =document.createElement("li")
    const label =document.createElement("label")
    const del = document.createElement("button")
    const edi = document.createElement("button")
    edi.innerText="edit"
    edi.className= 'editt'
    del.innerText="delete"
    del.className= "deletee"
//     del.addEventListener("click", (e)=>{
//    listitems.remove()
//     })
    edi.addEventListener("click", (e)=>{

    })
   label.innerText= input.value;
   listitems.appendChild(label)
   label.appendChild(edi)
   label.appendChild(del)
   console.log(listitems)
   return listitems

}
function handleDelete(){
    console.log(this,"i am running")
    let listitem = this.parentNode;
    let ull = listitem.parentNode;
    ull.removeChild(listitem)
}

const handleEvents = (iteam) =>{
    deletebutton = ul.querySelector(".deletee")
    deletebutton.onclick = handleDelete
    editbutton = ul.querySelector(".")
}
const additem = ()=>{
    console.log("i am clicked")
    let iteam =createElement()
    ul.appendChild(iteam)
    handleEvents(iteam)
}
button.addEventListener("click",additem)
