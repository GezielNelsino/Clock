const clock = document.querySelector("#horario");
const body = document.querySelector("body");

onload = () => {
    setInterval(setTimer, 1000);
};

function setTimer() {
    var today = new Date();

    var hour = formatTime(today.getHours());
    var minutes = formatTime(today.getMinutes());
    var seconds = formatTime(today.getSeconds());
    timeSetDay(hour);
    clock.textContent = `${hour}:${minutes}:${seconds}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function timeSetDay(hour) {
    isDay = hour < 18 && hour >= 6 ? true : false;
    body.classList.toggle("day", isDay);
    body.classList.toggle("night", !isDay);
}

setTimer();
