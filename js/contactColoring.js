'use strict';

const style = getComputedStyle(document.body)

const color_1 = "#f4900c";
const color_2 = "#ffd600";

function styleText(html) {
    const text = html.innerText;
    const length = text.length;
    let newText = "";
    for (let i = 0; i < length; i++) {
        let letter = text.at(i);
        i % 2 === 0
            ? letter = `<span style="color: ${color_1}">${letter}</span>`
            : letter = `<span style="color: ${color_2}">${letter}</span>`
        newText += letter;
    }
    return newText;
}

const emailElement = document.getElementById("email");
const phoneElement = document.getElementById("phone");

emailElement.innerHTML = styleText(emailElement);
phoneElement.innerHTML = styleText(phoneElement);
