// logic

const menubar = document.getElementById('menubar');
const closebar = document.getElementsByClassName('closebar')[0];
const sidebar = document.getElementById('sidebar');


menubar.addEventListener('click', ()=>{
    sidebar.style.transform = 'translate(0)'
})
closebar.addEventListener('click', ()=>{
    sidebar.style.transform = 'translate(-150%)'
})

