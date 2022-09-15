
let clockInterface = document.querySelector('clock');

let timeHour = Date.prototype.getHours();
let timeMinutes = Date.prototype.getMinutes();
let timeSeconds = Date.prototype.getSeconds();
let cuurentTime = timeHour + ":" + timeMinutes + ":" + timeSeconds;

clockInterface.innerHTML += currentTime;

function updateTime() {
    clockInterface.textContent = currentTime.toLocaleTimeString('en-US');
    clockInterface.append
}