// Logic


const menu = document.getElementsByClassName('menubar')[0];
const links = document.getElementsByClassName('nav-links')[0];

menu.addEventListener('click', ()=>{
    // 1st way
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links');
    // }else{
    //     links.classList.add('show-links');
    // }
    // Another way  //preferred way
   links.classList.toggle("show-links")
})
