'use strict';

const periods = [
    "May 2019 - Dec 2019",
    "Dec 2019 - May 2020",
    "May 2020 - Present"
]

const roles = [
    "Frontend Trainee",
    "Junior Frontend Developer",
    "Middle Frontend Developer"
]

const tasks = [
    [ // Frontend Trainee
        "Testing and debugging features or code snippets"
    ],
    [ // Junior Frontend Developer
        "Participating in code reviews and receiving feedback",
        "Collaborating with UI/UX designers to implement usability and accessibility enhancements"
    ],
    [ // Middle Frontend Developer
        "Collaborating with senior developers to enhance skills and learn new technologies",
        "Mentoring and providing guidance to junior frontend developers",
        "Optimizing the performance of web applications"
    ]
]

const experienceCards = document.getElementById("experience-cards");

// TODO: add css style for grid-area when generating periods
function fillPeriods() {

}

const experienceDisplay = document.getElementById()
function displayExperience(id) {
    const period = periods.at(id);
    const role = roles.at(id);
    const tasksForPeriod = tasks.at(id);



}
