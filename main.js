
setInterval(updateTime, 1000);

let clockTime

function updateTime() {
    clockTime = new Date();
    let currentTime = clockTime.toLocaleTimeString('en-US');
    document.getElementById('clock').innerHTML = currentTime;
    checkAlarm();
}

let alarmBtn = document.getElementById("submit");
alarmBtn.addEventListener('click', storeAlarm)

let alarmTime

function storeAlarm() {
    clockTime = new Date();
    alarmTime = document.getElementById("alarm").value;
    let alarmValue = document.getElementById("alarm-value");
    alarmValue.innerText = alarmTime.toString();
};

function checkAlarm() {
    const clockTime = new Date();
    let hours = clockTime.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = clockTime.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    const clockCheck = hours + ":" + minutes;
    let shortAlarm = document.getElementById("alarm").value;
    let finalAlarm = shortAlarm.toString();
    if (clockCheck === finalAlarm) {
        window.alert('ALARM');
    }
}
