'use strict';

const enable = true;
const firstIntervalMS = 2000; // 2 Seconds
const timerIntervalMS = 120000; // 2 Minutes (120 seconds)

const reminder = document.getElementById("reminder")
const showReminder = async() => {
    reminder.classList.toggle("show");
}
const hideReminder = async() => {
    reminder.classList.toggle("show");
    setTimeout(showReminder, timerIntervalMS);
}

if (enable) {
    setTimeout(showReminder, firstIntervalMS);
}
