// let a = document.querySelector("button");
// console.log(a, "button");
// console.log(this, "This is");
// a.addEventListener("Click", function (event) {
//     console.log(this, "hello event");
// });

//default params
// function add(num1, num2 = 10) {
//     console.log(num2, "num2");
//     return num1+num2;
// }
// add(5)

// add (5,2);// retuns 7
// add(3)//returns 13 as num2 had a default value = 10

//template strings
// let myName = "Kosmat"
// let myRole = "BCA"

// let test = `${myName}`

// console.log(test, "test");
// console.log(`My name: ${myName} and I am ${myRole}`);

//array destructuring 
// let array = ["Shreya", "Software Developer"];
// const [myName, myRole] = array;
// console.log(array, "array");

//object destructuring
// let object = {name : "Shreya"};
// const {name} = object;
// console.log(name, "Test Name");

//spread and rest
//(...) aagadi xa vane spread paxadi xa vane rest Ex:(...data{spread}, (data...){rest})
// function sum(...args){
//     console.log(args, "args");
//     let total = 0;
//     for (const arg of args) {
//         total +=arg;
//     }
//     return total;
// }

// console.log(sum(1,2,3));

//
// const myVehicle = {
//     brand: "Ford",
//     model: "Mustang",
//     color:"red",
// };

// const updateMyVehicle = {
//     type:"Car",
//     year: 2021,
//     color: "yellow",
// };

// let copyVariable = {...myVehicle, ...updateMyVehicle};
// console.log(copyVariable, "copyVariable");
// copyVariable.testkey = "Hey";
//deep copy ra shallow copy

//fetch
const button1 = document.querySelector("button");
const divWithQuote = document.querySelector("div")
console.log(divWithQuote, "divWithQuote");

const getPost = () => {
    let data = fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data) => (divWithQuote.innerText = data.title))
}

button1.addEventListener("click", getPost);
