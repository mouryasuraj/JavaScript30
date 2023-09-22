// using selector inside the element

const questions = document.querySelectorAll('.question')
questions.forEach((elem)=>{
    const btn = elem.querySelector('.question-btn');
    btn.addEventListener('click',()=>{
        questions.forEach((el)=>{
            if(el !== elem){
                el.classList.remove('showText')
            }
        })
        elem.classList.toggle('showText')
    })
})




// traversing the dom

// const buttons = document.querySelectorAll('.question-btn');
// buttons.forEach((elem)=>{
//     elem.addEventListener('click',(e)=>{
//         const article = e.currentTarget.parentElement.parentElement;
//         article.classList.toggle('showText');
//     })
// })




