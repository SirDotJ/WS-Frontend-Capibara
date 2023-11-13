'use strict';

const enable = false;
const timerIntervalMS = 120000;

const reminder = document.getElementById("reminder")
const showReminder = async() => {
    reminder.classList.toggle("show");
}
const hideReminder = async() => {
    reminder.classList.toggle("show");
    setTimeout(showReminder, timerIntervalMS);
}

if (enable) {
    setTimeout(showReminder, timerIntervalMS);
}
