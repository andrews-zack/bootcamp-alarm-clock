
setInterval(updateTime, 1000);

function updateTime() {
    let clockTime = new Date();
    let currentTime = clockTime.toLocaleTimeString('en-US');
    document.getElementById('clock').innerHTML = currentTime;
}

let alarmBtn = document.getElementById("submit");

alarmBtn.addEventListener('click', storeAlarm)

function storeAlarm() {
    let alarmTime = document.getElementById("alarm").value;
    let alarmValue = document.getElementById("alarm-value");
    alarmValue.innerText = alarmTime.toString();
};


