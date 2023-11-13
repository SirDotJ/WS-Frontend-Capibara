'use strict';

const periods = [
    "May 2020 - Present",
    "Dec 2019 - May 2020",
    "May 2019 - Dec 2019"
]

const roles = [
    "Middle Frontend Developer",
    "Junior Frontend Developer",
    "Frontend Trainee"
]

const tasks = [
    [ // Middle Frontend Developer
        "Collaborating with senior developers to enhance skills and learn new technologies",
        "Mentoring and providing guidance to junior frontend developers",
        "Optimizing the performance of web applications"
    ],
    [ // Junior Frontend Developer
        "Participating in code reviews and receiving feedback",
        "Collaborating with UI/UX designers to implement usability and accessibility enhancements"
    ],
    [ // Frontend Trainee
        "Testing and debugging features or code snippets"
    ]
]

const experienceCards = document.getElementById("experience-cards");
const defaultExperienceToDisplay = 0;
let currentSelected = defaultExperienceToDisplay;
function fillExperienceCards() {
    let html = "";

    const periodCount = periods.length;
    for (let i = 0; i < periodCount; i++) {
        const gridAreaName = "period-" + (i + 1);

        const period = periods.at(i);
        html += "<div class=\"experience-cards-period experience-cards-period--background-gray-default\" style=\"grid-area: " + gridAreaName + "\" onclick=\"displayExperience(" + i + ")\">" +
                    "<p class=\"body-2 body-2--normal text--gray-950\">" +
                        period +
                    "</p>" +
                "</div>"
    }

    html += "<div id=\"experience-display\" class=\"experience-display--background-gray-default\">" +
            "</div>"

    experienceCards.innerHTML = html;
    displayExperience(defaultExperienceToDisplay);
}
function displayExperience(id) {
    const experienceDisplay = document.getElementById("experience-display");
    const role = roles.at(id);
    const tasksForPeriod = tasks.at(id);

    let html = "";

    html +=
        "<img class=\"experience-display__logo\" src=\"assets/images/ws-logo.svg\" alt=\"Логотип White Soft\">" +
        "<div class=\"experience-display-content\">" +
            "<p class=\"experience-display-content__title subtitle subtitle--semi-bold text--gray-900\">" +
                role +
            "</p>" +
            "<ul class=\"experience-display-list\">"

    const taskCount = tasksForPeriod.length;
    for (let i = 0; i < taskCount; i++) {
        html +=
            "<li class=\"test body-2 body-2--normal text--gray-600\">" +
                tasksForPeriod.at(i) +
            "</li>"
    }

    html +=
        "</ul>" +
        "</div>"

    experienceDisplay.innerHTML = html;
}

fillExperienceCards()
