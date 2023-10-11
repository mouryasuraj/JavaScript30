// select button and video

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

// select preloader
const preloader = document.querySelector('.preloader');


// event listener on switch btn
btn.addEventListener('click',()=>{
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause()
    }else{
        btn.classList.remove('slide');
        video.play();
    }
})

// event on window when content load then run the call back function
window.addEventListener('load',()=>{
    preloader.classList.add('hide-preloader')
})
