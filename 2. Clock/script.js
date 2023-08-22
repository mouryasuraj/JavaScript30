function showClock() {
    let hour = document.getElementsByClassName('hour')[0];
    let minute = document.getElementsByClassName('minute')[0];
    let seconds = document.getElementsByClassName('seconds')[0];

    let date = new Date();
    let hrs = date.getHours();
    let mnts = date.getMinutes();
    let snds = date.getSeconds();

    hour.style.transform = `rotate(${30 * hrs + (mnts / 2)}deg)`;
    minute.style.transform = `rotate(${6 * mnts}deg)`;
    seconds.style.transform = `rotate(${6 * snds}deg)`;

}

setInterval(showClock, 1000)

