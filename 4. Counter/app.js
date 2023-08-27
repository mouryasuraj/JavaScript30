// logic
// Initial value for count
let count = 0;

// select value and buttons for operation
const span = document.querySelector('#span');
const btns = document.querySelectorAll('.btn');

// getting all btns and then performed addEvenlistener to each button according to their work
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let currentBtn = (e.currentTarget.classList)

        // Ternary operator for counter increase or decrease

        currentBtn.contains('decrease') ? count-- : currentBtn.contains('increase') ? count++ : count = 0;


        // Ternary operator for changing font color accorind to the below condition

        count < 0 ? span.style.color = 'red' : count > 0 ? span.style.color = 'skyblue' : span.style.color = 'white';
        span.textContent = count
    })
})