console.log('Bushra');
// let boxes=document.getElementsByClassName('box')
// console.log(boxes);
// boxes[3].style.background='red'

document.getElementById('blueBox').style.background='blue'

// Apply only on first element which maches the property
document.querySelector('.box').style.background='green'

let boxes=document.querySelectorAll('.box')
console.log(boxes);

boxes.forEach(e=>{
    e.style.background='pink'
})