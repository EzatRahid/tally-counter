let plus = document.getElementById('plus');
let minus = document.getElementById('minus');

let counterEle = document.getElementById('counterEle');
let counter = 0;

plus.addEventListener('click', ()=>{ 
   counter++
   counterEle.textContent = counter;

})
minus.addEventListener('click', ()=>{ 
   counter--
   counterEle.textContent = counter;

})

console.log(counterEle)