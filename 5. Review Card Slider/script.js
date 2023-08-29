// Logic

// Profile Details
let profile = [
    {
        img:'./images/User1.jpg',
        author:'Julia Ramora',
        job:'Web developer',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatum veniam nostrum quos rerum, accusamus consectetur est impedit laudantium in architecto aut cum est nam beatae labopeldeserunt aliquam voluptatum veniam officia optio, cum ullam?'
    },
    {
        img:'./images/User2.jpg',
        author:'Samaul Brit',
        job:'UI/Ux Designer',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatum veniam nostrum quos rerum, accusamus consectetur est impedit laudantium in architecto aut cum est nam beatae labopeldeserunt aliquam voluptatum veniam officia optio, cum ullam?'
    },
    {
        img:'./images/User3.jpg',
        author:'Hammer Kotli',
        job:'IOS Developer',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatum veniam nostrum quos rerum, accusamus consectetur est impedit laudantium in architecto aut cum est nam beatae labopeldeserunt aliquam voluptatum veniam officia optio, cum ullam?'
    },
    {
        img:'./images/User4.jpg',
        author:'Junnard Phome',
        job:'Network Engineer',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatum veniam nostrum quos rerum, accusamus consectetur est impedit laudantium in architecto aut cum est nam beatae labopeldeserunt aliquam voluptatum veniam officia optio, cum ullam?'
    }
]

// Profile
const img = document.querySelector('#img');
const author = document.getElementById('author');
const job = document.getElementById('job-profile');
const info = document.getElementById('info')

// next prev btn
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const randomReview = document.getElementById('randomReview');


let currentNumber = 0;

window.addEventListener('DOMContentLoaded', ()=>{
    showPerson()
})

// Show Person Function
function showPerson() {
    let item = profile[currentNumber];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;
}

// show Next person
next.addEventListener('click', ()=>{
    currentNumber++;
    if(currentNumber >  profile.length - 1){
        currentNumber = 0;
    }
    showPerson()
})


// show Prev person
prev.addEventListener('click', ()=>{
    currentNumber--;
    if(currentNumber < 0){
        currentNumber = profile.length - 1;
    }
    showPerson()
})

// Random Person Generator
randomReview.addEventListener('click', ()=>{
    currentNumber = Math.floor(Math.random() * profile.length);
    showPerson();
})