let itemInput = document.querySelector("input");
let listOfItems = document.getElementById("Items");
let button = document.querySelector("button");

const createElement = () => {
    const foods = document.createElement("li")
    const label = document.createElement("Label");
    label.innerHTML = itemInput.value;
    foods.appendChild(label);
    console.log(itemInput.value);
    return foods;
};

const addItems = () => {
    let items = createElement();
    listOfItems.appendChild(items);
}


button.addEventListener("click", addItems);
