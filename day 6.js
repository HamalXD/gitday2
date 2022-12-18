// person1.name equals to my name
// alert('I am Hamal');
// alert();

// let person1 = {
//     firstName: 'Samman Hamal',
//     secondName: 'Kismat Shrestha',
// }

// if (person1.firstName == 'Samman Hamal')
//  alert('I am ' + person1.firstName);

// else {
//     alert('Error');
// }


// const person = {
//     personName:'Hamal', age: 24
// };

// if (person.age > 18)
// alert('My age is' + " " + person.age);

// else {
//     alert('Error');
// }

// const person4 = {
//     Name:'Hamal',
//     age: 24
// };

// if(person4.age > 18 || person4.Name ==='Hamal'){
//     alert('My age is' + " " + person4.age)
// }
// else {
//     alert('Error');
// }

// const person5 = {
//     Name:'Hamal',
//     age: 24
// }

// if(person5.age < 18)
//     alert('My age is' + " " + person5.age)

//     else if (person5.Name = 'Hamal')
//     alert('My name is ' + " " + person5.Name)

// else {
//     alert('Error');
// }

//functions
// function add(parameter1, parameter2,.....) {
//    return alert(parameter1, parameter2)
// }
// add (argument1, argument2)

// let a = 10
// let b = 20
//  function add (a,b) {
//     return alert(a, b)
//  }
// add (a + b)

// let a = 10
// let b = 20
    //  function add (a,b) {
    //     let c = a + b
    //     return alert(c);
    //     let d = b + c;
    //  }
    //  add (10,20)
    //  add (30,20)
// function multiply (a,b) {
//     let c = a * b;
//     return alert(c)
// }
// multiply (10,20)

// function add() {
//     let a = 10
//     let b = 20
//     if (!(a > b))
//         alert('Number' + " " + 'Larger than 10')
//     else {
//         alert('Number' + " " + 'Smaller than 10')
//     }
// }
// add();


//loops in JS
//For loop
let array = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i <=array.length; i++) {
    console.log(array[i]);
}

//While loop
let a = 0;
while (a <= 10) {
  console.log("The number is " + a);
  a++;
}

//Do While Loop
let b = 0;
do {
  console.log ("The number is " + b);
  b++;
}
while (b <= 10);