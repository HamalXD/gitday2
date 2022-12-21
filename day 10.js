// let promise = new Promise(function(resolve, reject) {
    //code execution may take time 
//     resolve();//when successful
//     reject();// when error
// });

// "Consuming Code" (must wait for a fullfilled promise)
// promise.then(
//     function(value) {
    // code is successful
//     },
//     function(error){
        //code if some error
//     }
    
// );

//example of promise
// let x = 1;
// let promise = new Promise((resolve, reject) => {
//     if (x === 0) {
//         resolve("hello i am resolved");
//     }else {
//         reject("Error");
//     }
// });

// console.log(promise);

// promise.then(
//     (value) => {
//         console.log(value, "Value");
//     },
//     (error) => {
//         console.log(error, "Error");
//     }
// );

// let names = document.getElementById(names).innerHTML = "Heyyyyyyyy";
// console.log(names, "header");

let header = document.querySelector(".header");
console.log(header, "header");
header.style.color = "blue";
header.style.fontSize = "100px";


// let button = document.createElement("button");
// button.innerHTML = "This a text file";
// document.body.appendChild(button);
// console.log(button, "Button");

//appending 
let header1 = document.createElement ("header1");
document.body.appendChild(header1);
header1.innerText = "Random bullshit Rajesh Hamal :D";
console.log(header, "header1");

let foods = document.getElementById("myfoods");
console.log(foods, "foods");
console.log(foods.parentNode, "Parent Node");
console.log(foods.childNodes, "Child Node");
