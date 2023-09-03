// Logic

// select
const openBtn = document.querySelector('#openBtn')
const closeBtn = document.querySelector('#closeBtn');
const modal = document.getElementsByClassName('modal')[0];


// Event on openBtn
openBtn.addEventListener('click', ()=>{
    modal.classList.add('show-modal');
})

// Event on closeBtn
closeBtn.addEventListener('click', ()=>{
    modal.classList.remove('show-modal');
})