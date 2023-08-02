
window.addEventListener('keydown', (e)=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.toggle('scale-[1.05]')
    key.classList.toggle('border-yellow-500')
    key.classList.toggle('border-4')
    setTimeout(()=>{
        key.classList.remove('scale-[1.05]')
        key.classList.remove('border-yellow-500')
        key.classList.remove('border-4')
    },200)
})