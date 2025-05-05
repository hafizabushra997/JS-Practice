// // A function that adds two numbers

// function sum(a,b) {
//     return a+b;
// }
// console.log(`Sum: ${sum(2,3)}`);

// A function that checks if a number is even or odd
// function checkEvenOdd(num) {
//     // if(num%2==0){
//     //     console.log(`${num} is even`);
        
//     // }
//     // else{
//     //     console.log(`${num} is odd`);

//     // }
//     return ((num%2==0) ? `${num} is even`  : `${num} is odd`);
    
// }
// console.log(checkEvenOdd(9));



// A function that returns the length of a given string
// function strLength() {
//     let str='Hafiza Bushra'
//     console.log(`Str Length: ${str.length}`);
    
// }
// strLength()

// A function that multiplies all numbers in an array
// function name(params) {
    
// }

// // Program to print marks of student in an objusing for loop
// let marks={
//     Bushra:90,
//     Hassan:85,
//     Rahma:87

// }
// // // Extract keys and use a simple for loop
// const keys = Object.keys(marks);

// for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     console.log(`Marks of ${key}: ${marks[key]}`);
// }


// Program to print marks of student in an objusing for...in loop
let marks={
    Bushra:90,
    Hassan:85,
    Rahma:87

}
for (const key in marks) {
        const element = marks[key];
        console.log(`Marks of ${key}: ${element}`);
        
    
}