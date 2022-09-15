
//let clockInterface = document.getElementById('clock');

let clockTime = new Date();
let timeHour = clockTime.getHours();
let timeMinutes = clockTime.getMinutes();
let timeSeconds = clockTime.getSeconds();
let currentTime = timeHour + ":" + timeMinutes + ":" + timeSeconds;

document.getElementById('clock').innerHTML = currentTime;

//clockInterface.innerHTML = currentTime;

function updateTime() {
    clockInterface.textContent = currentTime.toLocaleTimeString('en-US');
    clockInterface.append
}