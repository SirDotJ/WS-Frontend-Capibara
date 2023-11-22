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
let previousSelected = defaultExperienceToDisplay;
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
        <div id="experience-display" class="experience-display--background-gray-default">
            <img class="experience-display__logo" src="../assets/images/ws-logo.svg" alt="Логотип White Soft">
            <p class="experience-display-content__title subtitle subtitle--semi-bold text--gray-900"></p>
            <ul class="experience-display-list"></ul>
        </div>`

    experienceCards.innerHTML = html;
    displayExperience(defaultExperienceToDisplay);
}

let savedMobileAreas = ""
function displayExperience(id) {
    const experienceDisplay = document.getElementById("experience-display");
    const periods = document.querySelectorAll("#experience-cards > .experience-cards-period")
    experienceDisplay.classList.toggle("hide")
    periods.forEach((period) => {
        period.classList.toggle("hide")
    })
    setTimeout(function() {
        changeDisplayContent(id)
    }, 600)
    setTimeout(function() {
        experienceDisplay.classList.toggle("hide")
        periods.forEach((period) => {
            period.classList.toggle("hide")
        })
    }, 700)
}

function changeDisplayContent(id) {
    /* Selecting period  */
    const previousPeriod = experienceCards.children[previousSelected];
    const newPeriod = experienceCards.children[id];
    unselectPeriod(previousPeriod);
    selectPeriod(newPeriod);
    previousSelected = id;

    /* Setting the title */
    const title = document.querySelector("#experience-display > .experience-display-content__title")
    title.innerText = experiences[id].role

    /* Filling out the tasks list */
    const tasks = experiences[id].tasks;
    const list = document.querySelector("#experience-display > .experience-display-list")
    let listHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        listHTML += `
                <li class="test body-2 body-2--normal text--gray-600">
                    ${tasks[i]}
                </li>`
    }
    list.innerHTML = listHTML

    /* Calculating change of template-area for mobile */
    let mobileAreas = ``
    for (let i = 0; i < experiences.length; i++) {
        mobileAreas += `"period-${i + 1}"\n`
        if (id === i)
            mobileAreas += `"display"\n`
    }
    savedMobileAreas = mobileAreas
    /* Not applied for desktop/tablet but saved if we resize to mobile */
    if (window.innerWidth < 768) {
        experienceCards.style.gridTemplateAreas = `${mobileAreas}`
    }
}

const selectedClass = "text--bold";
function selectPeriod(period) {
    const text = period.querySelectorAll("p");
    text.forEach((element) => {
        element.classList.add(selectedClass);
    })
}
function unselectPeriod(period) {
    const text = period.querySelectorAll("p");
    text.forEach((element) => {
        element.classList.remove(selectedClass);
    })
}

/* Used to make sure that grid areas change correctly on resize */
window.addEventListener(`resize`, function(event) {
    if (event.target.innerWidth >= 768) {
        let newAreas = ``
        for (let i = 0; i < experiences.length; i++) {
            newAreas += `"period-${i + 1} display"\n`
        }
        experienceCards.style.gridTemplateAreas = `${newAreas}`
    } else {
        experienceCards.style.gridTemplateAreas = `${savedMobileAreas}`
    }
}, true)

fillExperienceCards()
