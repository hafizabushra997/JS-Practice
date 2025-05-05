// Problem 1
// let arr=[]

// let arrayLength=Number(prompt('Define an array length'))
// console.log(arr);

// for (let i = 0; i < arrayLength; i++) {
//     let inputNo=Number(prompt('Enter any no to add in an array'))
// Validate number input
// while (isNaN(inputNo)) {
//     inputNo = Number(prompt(`Invalid input. Please enter a valid number for item ${i + 1}:`));
// }
//         arr.push(inputNo);

    
// }
// console.log(arr);


// Problem 2
// let arr=[]

// console.log(arr);

// while (true) {
//     let inputNo = Number(prompt('Enter a number to add to the array (enter 0 to stop):'));

//     if (inputNo === 0) {
//         break; // stop loop when 0 is entered
//     }

//     // Validate input
//     while (isNaN(inputNo)) {
//         inputNo = Number(prompt('Invalid input. Please enter a valid number:'));
//     }

//     arr.push(inputNo);
// }

// console.log('Final array:', arr);


// Problem 3 using forEach
// let arr = [2, 3, 4];
// let squaredArr = [];
// arr.forEach((e) => {
//     squaredArr.push(e * e);
// });

// console.log(squaredArr); // [4, 9, 16]


// Problem 3 using map()

// const numbers = [2,3,4];

// let newArr=numbers.map((e,index,array)=>{
//     return e**2
// })
// console.log(newArr);

// Problem 4 Mewthod 1
// let numbers=[2,10,30,4,70,80,60,7,9,40]
// let divBy10=(e)=>{
//     if (e%10==0) {
//         return true
//     }
//     else{
//         return false
//     }
// }

// let newArr=numbers.filter(divBy10)
// console.log(newArr);

// Problem 4 Mewthod 2

// let newArr=numbers.filter(e=>{
//     return e%10==0
// })
// console.log(newArr);

// Problem 5
let numbers=[1,2,3]
function calcFact(a,b) {
    return b*a
}
console.log(numbers.reduce(calcFact));
