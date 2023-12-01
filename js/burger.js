'use strict';

/* Functions that work to store previously applied styles */

let previousFilter = [];
let previousTransition = [];
let previousPointerEvents = [];
const clearCache = async() => {
    previousFilter = [];
    previousTransition = [];
    previousPointerEvents = [];
}

const appendCache = async(element) => {
    previousFilter.push(element.style.filter);
    previousTransition.push(element.style.transition);
    previousPointerEvents.push(element.style.pointerEvents);
}

const applyCache = async(element) => {
    element.style.filter = previousFilter.pop();
    element.style.transition = previousTransition.pop();
    element.style.pointerEvents = previousPointerEvents.pop();
}

/* Blurring background */

const blurStrength = "3px";
const blurTransitionLength = "0.25s";
const blurElement = async(element) => {
    element.style.filter = `blur(${blurStrength})`;
    element.style.transition = `${blurTransitionLength} filter linear`;
    element.style.pointerEvents = `none`;
}

/* Burger click events */

const nonBurgerContent = document.querySelectorAll("body > *:not(#burger-menu, #reminder)");
const burgerContent = document.getElementById("burger-menu");
const openBurger = async() => {
    await clearCache();
    burgerContent.classList.toggle("show");
    for (let i = 0; i < nonBurgerContent.length; i++) {
        await appendCache(nonBurgerContent[i]);
        await blurElement(nonBurgerContent[i]);
    }
}

const closeBurger = async() => {
    burgerContent.classList.toggle("show");
    for (let i = nonBurgerContent.length - 1; i >= 0; i--) {
        await applyCache(nonBurgerContent[i]);
    }
    await clearCache();
}
