let arr=[2,4,6,8]
// let newArr=[]
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element**2)
// }
// console.log(newArr);

// Above program using map
let newArr=arr.map((e,index,array)=>{
    return e**2
})
console.log(newArr);


// Filter Method
let greaterThan7=(e)=>{
    if (e>7) {
        return true
    }
    else{
        return false
    }
}

console.log(newArr.filter(greaterThan7));

// Reduce Method
let arr2=[1,2,3,4]
let red=(a,b)=>{
    return a+b
}
console.log(arr2.reduce(red));

