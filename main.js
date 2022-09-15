
//let clockInterface = document.getElementById('clock');

let clockTime = new Date();
let timeHour = clockTime.getHours();
let timeMinutes = clockTime.getMinutes();
let timeSeconds = clockTime.getSeconds();
let currentTime = timeHour + ":" + timeMinutes + ":" + timeSeconds;

//document.getElementById('clock').innerHTML = currentTime;

/*setInterval(updateTime, 1000);

function updateTime() {
    document.getElementById('clock').innerHTML = currentTime;
}   */
const runningTime = setInterval(updateClock, 1000, currentTime);
function updateClock(currentTime) {
    document.getElementById('clock').innerHTML = currentTime;
}