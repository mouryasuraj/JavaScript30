// Logic 

const valuesForHexColor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.getElementById('btn');
const clr = document.querySelector('#clr');
const copied = document.getElementsByClassName('copied')[0];

// Click me btn Logic
btn.addEventListener('click', (()=>{
    let hexCode = '#'
    // Loop to get values of length 6
    for(let i=0; i<6; i++){
        hexCode += valuesForHexColor[randomNumber()]
    }
    document.body.style.backgroundColor = hexCode;
    clr.textContent = hexCode;
}))

// Function for randomNumber
const randomNumber = ()=>{
    let min = 0;
    let max = valuesForHexColor.length - 1;
    return Math.floor(Math.random() * (max - min + 1));
}

// Copy the text and Show th e msg
clr.addEventListener('click', (()=>{
    let text = clr.textContent;
    navigator.clipboard.writeText(text)
    copied.style.display = 'block';
    setTimeout(()=>{
        copied.style.display = 'none';
    },2000)
}))