// let x = 0;
// let text;

// switch (x) {
//     case 0:
//         text = "off";
//         break;
//     case 1:
//             text = "on";
//             break;
//             default:
//             text = "no value"

// }

// console.log(text, "text");


// Simple Calculater
// let result;

// const number1 = parseInt(prompt("Enter first number"))
// const number2 = parseInt(prompt("Enter second number"))

// const operater = prompt("Enter a operater")


// switch (operater) {
//     case '+':
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;

//     case '-':
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;

//     case '*':
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;

//     case '/':
//         result = number1 - number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;
// }

// let dailyRoutine = [1,2,3,4]
// let dailyRoutine1 = [0,9,8,7]
// dailyRoutine.push(5);//adding elemets in array (push-last ma, unshift- first ma)  
// dailyRoutine.pop();//removing elememets in array (pop-last ma, shift- first ma)
// dailyRoutine[4] = 5 //will replace the value if there is already a value

// console.log(dailyRoutine.sort(), ("sorted away"));//sorting in ascending order
// console.log(dailyRoutine.reverse(), ("sorted away"));//sorting in descending order
// console.log(dailyRoutine)
// console.log(dailyRoutine.concat(dailyRoutine1))//adding array


// Array map
// const number = [1,2,3,4];
// const newArr = number.map(multiply);//number.map(function)  .map returns an array at the end

// function multiply(num){
//     return num * 10;
// }

// let a = multiply(10);
// console.log(newArr, "new array");

// const number = [10,20,30,40];
// const newArr = number.map(sub);

// function sub(num){
//     return num - 5;
// }

// let a = sub(5);
// console.log(newArr, "new array");

// let person = [{

//     firstName:"Ram",
//     lastName:"Kumar"
// },
// {    
//     firstName:"Rita",
//     lastName:"Kumari"
// },
// {    
//     firstName:"Shyam",
//     lastName:"Thapa"
    
// },
// ];

// const updatedPersons = person.map(newnames);

// function newnames(name) {
//     return{ fullName: `${name.firstName} ${name.lastName}`}
// }

// console.log(updatedPersons);

//filter
let person = [{

    id: 1,
    firstName:"Rita",
    lastName:"Kumar"
},
{    
    id: 2,
    firstName:"Rita",
    lastName:"Kumari"
},
{   
    id: 3,
    firstName:"Shyam",
    lastName:"Thapa"
    
},
];

const Persons = person.filter(filterbyid);

function filterbyid(name) {
    return  name.firstName === 'Rita';
}

console.log(Persons);

