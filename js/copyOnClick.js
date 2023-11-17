'use strict';

const copyField = async(tag) => {
    const content = tag.innerText.replaceAll(" ", " ");
    await navigator.clipboard.writeText(content);
}

const playFadeInFadeOut = async(tag) => {
    tag.classList.toggle('fadeInFadeOut');
    setTimeout(() => {
        tag.classList.toggle('fadeInFadeOut');
    }, 800)
}

const copyToClipboard = async(caller, tooltipId) => {
    await copyField(caller)
    await playFadeInFadeOut(document.getElementById(tooltipId))
}
