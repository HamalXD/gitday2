// join all elements of the following array
const array=["Apple","Banana","Orange","Mango"]
const newArr= array.join()
console.log(newArr)

// reverse an array without using array.reverse() method
const data=[1,2,3,4,5,6]
const newArr= data.length-1;
for(let i=0;i<=newArr/2;i++) {
    let temp = data[i];
    data[i] = data[newArr-i];
    data[newArr-i] = temp;
}
console.log(data)

// A method that returns a unique array
const data = [1, 2, 1, 2, 3];
const unique = Array.from(new Set(data));
console.log(unique)

// A method that returns array of age
const person = [
    {name:"Jack",age:"22"},
    {name:"David",age:"18"},
    {name:"Rohit",age:"4"}
]

const ageArr = person.map(function(person) {
    return person.age;
})

console.log(ageArr)

// A method to find minumum and maximum values
const data=[10,100,3,200,5,6]
minValue = Math.min(...data)
maxValue = Math.max(...data)

console.log(minValue)
console.log(maxValue)

// Write a method to sort array without using sort method 
const data= [4, 50, 1, 5, 8];

for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] > data[j]) {
        temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
  }
  console.log("Sorted array=>", data);



//7)a)Write a method to get array of peoples with weight greater than 100
const weightarr = peoples.filter(get)
function get(obj){
    return obj.weight > 100;
}
console.log("People weight greater than 100:", weightarr);

//7)b)Write a method to get array of peoples with height less than 200
const greaterarr = peoples.filter(shark) 
function shark(obj){
    return obj.height < 200;
}

//7)c)Write a method to get all male characters
const maleArr = peoples.filter(male)
function male(obj) {
    return obj.gender === "male";
};
console.log("Male Characters:", maleArr);

//7)d)Write a method to get all female characters
const femaleArr = peoples.filter(female)
function female(obj){
    return obj.gender === "female";
}
console.log("Female Characters:", femaleArr);

//7)e))Write a method to get array of objects with just name and height properties
const nameAndHeightArr = peoples.map(nameheight)
function    nameheight(obj) {
    return { name: `${obj.name}`, height: `${obj.height}` };
}
console.log("Name and Height Array:", nameAndHeightArr);
