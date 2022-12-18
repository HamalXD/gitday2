// syntax of reduce(returns on initial value)
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// const number = [4,5,6,7,8];
// let testedArray = number.reduce(getsum, 0);

// function getsum(total, num) {
//     console.log(total, "total")
//     return total + Math.round(num);
// }

// const arrayOfFoods = [{
//     name: "Pizza",
//     cost: 120
// },
// {   
//     name: "Pasta",
//     cost: 500
// },];

// let updatedArray = arrayOfFoods.reduce(getCost, 0);
// function getCost(total, foods) {
//     console.log(total)
//     return total + foods.cost;
// }

//Scope In JS
//global scope
//hoisting
// var test; 

// function hello() {
//     //local variables
//     // var is a function scope not block scope
//     var helloWorld;
// }

// if (true) {
//     var helloWorld;
// }
// console.log(helloWorld);

//array.foreach(function(currentValue, index, arr), thisValue)
// const number = [2,3,4,5]
// number.forEach();
// console.log(number)

//array.find (doesn't return in array)

//arrow function
// const arrayFunction = () => 2; 


//while loop
// const testArray = [1,3,5,7,9]
// let newArray = [];
// let i = 0;
// while (i<newArray.length) {
//     newArray.push(testArray[i]);
//     console.log(i, "i");
//     i++;
// }

//do while loop
let array = ["ram","Shyam","hari","Laxman","World","Hey","Hello"];
let i = 0;

do {
    i++;
    console.log(array[i]);
    console.log(i);
}while (i<5);