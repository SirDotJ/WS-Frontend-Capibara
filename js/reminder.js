const timerIntervalMS = 120000;

const reminder = document.getElementById("reminder")
const showReminder = async() => {
    reminder.classList.toggle("show");
    console.log("hi there!");
}
const hideReminder = async() => {
    reminder.classList.toggle("show");
    setTimeout(showReminder, timerIntervalMS);
}

setTimeout(showReminder, timerIntervalMS);