'use strict';

const copyField = async(tag) => {
    const content = tag.innerText.replaceAll(" ", " ");
    navigator.clipboard.writeText(content);
}

const playFadeInFadeOut = async(tag) => {
    tag.classList.toggle('fadeInFadeOut');
    setTimeout(() => {
        tag.classList.toggle('fadeInFadeOut');
    }, 800);
}

const copyToClipboard = async(caller, tooltipId) => {
    copyField(caller).then(() => {
        const toolTipElement = document.getElementById(tooltipId);
        playFadeInFadeOut(toolTipElement);
    })
}
