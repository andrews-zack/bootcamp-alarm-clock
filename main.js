
setInterval(updateTime, 1000);

function updateTime() {
    let clockTime = new Date();
    /*let timeHour = clockTime.getHours();
    let timeMinutes = clockTime.getMinutes();
    let timeSeconds = clockTime.getSeconds();*/
    //let currentTime = timeHour + ":" + timeMinutes + ":" + timeSeconds;
    let twelveHour = clockTime.toLocaleTimeString('en-US');
    document.getElementById('clock').innerHTML = twelveHour;
}
