// 4))Write a JavaScript method that takes array of objects
//   const data = [
//     { food: {name:"pizza", id: 2 }, qty: 1 },
//     { food: {name:"momo",id: 3 }, qty: 5 },
//     { food: { name:"pizza",id: 2 }, qty: 9 }
//   ];
//should be unique according to id and should sum the qty with same id
// output=[food:{name:"pizza",qty:10}]

// const data = [
//     { food: { name: "pizza", id: 2 }, qty: 1 },
//     { food: { name: "momo", id: 3 }, qty: 5 },
//     { food: { name: "pizza", id: 2 }, qty: 9 },
// ];

// const reducedData = (arr) => {
//     const filteredArr = arr.filter((obj) => {
//         return obj.food.id === 2;
//     });

//     const qty = filteredArr.reduce((acc, obj) => {
//         return acc + obj.qty;
//     }, 0);

//     const newData = [filteredArr[0]].map((currentValue) => {
//         // acc.push({ name: obj.food.name, qty: qty });
//         // return acc;swdf
//         return {name: currentValue.food.name, qty: qty}
//        // console.log(currentValue, "Current value");
//     }, []);
//     return newData;
// };

// console.log(reducedData(data));


//document
console.log(document.getElementsById("names"));
console.log(document.getElementsByClassName("demo"), "Class");
console.log(document.getElementsByName("kosmat"), "Class");