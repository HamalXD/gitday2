//Use For loop first , Foreach loop and for of loop
const Fruits =[
    { name: "Apple", cost: "200" },
    { name: "Guava", cost: "100" },
    { name: "Mango", cost: "200" },
  ];

Q1
  for (i = 0; i < Fruits.length; i++ ) {
    console.log(Fruits[i].name);
  }

Q2
Fruits.forEach((fruit) => {
    console.log(fruit.name);
})

Q3
for (let fruit of Fruits) 
    console.log(fruit.name);

//Use above fruits array and change the value of name to console the output
Fruits[0].name = "Grapes";
Fruits[1].name = "Watermelon";
Fruits[2].name = "Banana";

Fruits.forEach((fruit) => {
    console.log(fruit.name);
});
