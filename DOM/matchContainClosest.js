let e=document.getElementsByTagName('div')
console.log(e);
// console.log(e[3].matches('#blueBox'));    //return true
// console.log(e[2].matches('#blueBox'));    //return false

// console.log(e[3].closest('#blueBox'));    //return #blueBox div
// console.log(e[2].closest('#blueBox'));    //return null

console.log(document.querySelector('.container').contains(e[2]));  
//return true
console.log(document.querySelector('.container').contains(document.querySelector('body')));  //return false


// document.querySelector('.container').contains(e[2])