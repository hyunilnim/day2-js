const [btn1, btn2] = document.querySelectorAll('button');
const box = document.querySelector('.box');

let count = 0;

btn2.addEventListener('click', ()=>{
  
  box.style.transform = `rotate(${30* ++count}deg`
})

btn1.addEventListener('click', ()=>{
  
  box.style.transform = `rotate(${30* --count}deg`
})