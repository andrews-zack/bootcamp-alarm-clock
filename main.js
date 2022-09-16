
setInterval(updateTime, 1000);

function updateTime() {
    let clockTime = new Date();
    /*let timeHour = clockTime.getHours();
    let timeMinutes = clockTime.getMinutes();
    let timeSeconds = clockTime.getSeconds();
    let currentTime = timeHour + ":" + timeMinutes + ":" + timeSeconds;*/
    let currentTime = clockTime.toLocaleTimeString('en-US');
    document.getElementById('clock').innerHTML = currentTime;
}
const alarmTime = document.getElementById("alarm");
const timeValue = document.getElementById("value");
// let submitBtn = document.getElementById("submit");
// let alarmSet

alarmTime.addEventListener('keydown', (e) => {
    timeValue.innerText = alarmTime.value;
}, false);

/*function storeAlarm() {
    console.log(alarmTime);
};*/