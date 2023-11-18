'use strict';

const experiences = [
    {
        period: "May 2020 - Present",
        role: "Middle Frontend Developer",
        tasks: [
            "Collaborating with senior developers to enhance skills and learn new technologies",
            "Mentoring and providing guidance to junior frontend developers",
            "Optimizing the performance of web applications"
        ]
    },
    {
        period: "Dec 2019 - May 2020",
        role: "Junior Frontend Developer",
        tasks: [
            "Participating in code reviews and receiving feedback",
            "Collaborating with UI/UX designers to implement usability and accessibility enhancements"
        ]
    },
    {
        period: "May 2019 - Dec 2019",
        role: "Frontend Trainee",
        tasks: [
            "Testing and debugging features or code snippets"
        ]
    }
]

const experienceCards = document.getElementById("experience-cards");
const defaultExperienceToDisplay = 0;
let currentSelected = defaultExperienceToDisplay;
function fillExperienceCards() {
    let html = "";

    const experienceCount = experiences.length;
    for (let i = 0; i < experienceCount; i++) {
        const period = experiences[experienceCount - i - 1].period
        const gridAreaName = "period-" + (i + 1);

        html += `
            <div class="experience-cards-period experience-cards-period--background-gray-default" style="grid-area: ${gridAreaName}" onclick="displayExperience(${i})">
                <p class="body-2 body-2--normal text--gray-950">
                    ${period}
                </p>
            </div>`
    }

    html += `
        <div id="experience-display" class="experience-display--background-gray-default"></div>`

    experienceCards.innerHTML = html;
    displayExperience(defaultExperienceToDisplay);
}
function displayExperience(id) {
    const experienceDisplay = document.getElementById("experience-display");
    const role = experiences[id].role
    const tasks = experiences[id].tasks

    let html = "";

    html += `
        <img class="experience-display__logo" src="../assets/images/ws-logo.svg" alt="Логотип White Soft">
        <div class="experience-display-content">
            <p class="experience-display-content__title subtitle subtitle--semi-bold text--gray-900">
                ${role}
            </p>
            <ul class="experience-display-list">`

    const taskCount = tasks.length;
    for (let i = 0; i < taskCount; i++) {
        html += `
                <li class="test body-2 body-2--normal text--gray-600">
                    ${tasks[i]}
                </li>`
    }

    html += `
            </ul>
        </div>`

    experienceDisplay.innerHTML = html;

    /* Change of template-area for mobile */
    if (window.innerWidth < 768) {
        let newAreas = ``
        for (let i = 0; i < experiences.length; i++) {
            newAreas += `"period-${i + 1}"\n`
            if (id === i)
                newAreas += `"display"\n`
        }
        experienceCards.style.gridTemplateAreas = `${newAreas}`
    }
}

fillExperienceCards()
