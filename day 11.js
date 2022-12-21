//event listener
//addEventListener(event, function);

// let a = document.getElementById("hey");
// let b = document.getElementById("header");

// console.log(a, "button");
// a.addEventListener("click",()=> {
//     b.innerHTML = "I am clicked";
// });

// let a = document.getElementById("hey");
// a.addEventListener("click",()=> {
//     console.log("I clicked on this button");
// })

// function textClick () {
//     console.log(textClick, "Text click");
// }

// let inputField = document.querySelector("input");
// console.log(inputField, "input field");
// inputField.addEventListener("keypress", keyPress);
// function keyPress(event) {
//     if (event.key==="h") {
    // console.log(event,"Event");
//     console.log("Key Pressed");
//     }
// }

let itemInput = document.querySelector("input");
// console.log(itemInput, "Input");

let listOfItems = document.getElementById("Items");
// console.log(listOfItems);

let button = document.querySelector("button");
// console.log(button, "Button");

const createElement = () => {
    const listItems = document.createElement("li")
    const label = document.createElement("Label");
    const edit = document.createElement("Button");
    const del = document.createElement("Button");
    label.innerHTML = itemInput.value;
    edit.innerHTML = "Edit";
    del.innerHTML = "Delete";
    listItems.appendChild(label);
    label.appendChild(edit);  
    label.appendChild(del);
    console.log(listItems, "List");
    console.log(itemInput.value);
    return listItems;
};

const addItems = () => {
    // console.log("I am adding items");
    let items = createElement();
    listOfItems.appendChild(items);
    console.log(listOfItems);
}


button.addEventListener("click", addItems);
