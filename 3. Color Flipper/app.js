// Logic

// Colors
const bg_colors = ["green", "red", "rgb(133,122,200)", "#F1f2f2", "yellow", "black"];

const btn = document.getElementById('btn');
const clr = document.getElementById('clr');
const copied = document.getElementsByClassName('copied')[0];

btn.addEventListener('click', (() => {
    // We need random number between 0 to 3 because we have 4 values in bg_colors
    let randomNumber = getRandomNum();

    // Change the background of Body
    document.body.style.backgroundColor = bg_colors[randomNumber]
    // Change the background of Color Code
    clr.innerHTML = bg_colors[randomNumber]
}))

// Get Random Number Function
const getRandomNum = () => {
    let min = 0
    let max = bg_colors.length - 1
    return Math.floor(Math.random() * ((max - min) + 1));
}

// Copy The text and Show the Msg
clr.addEventListener('click', (() => {
    let text = clr.innerHTML;
    navigator.clipboard.writeText(text);
    copied.style.display = 'block'
    setTimeout(() => {
        copied.style.display = 'none'
    }, 2000)
}))

