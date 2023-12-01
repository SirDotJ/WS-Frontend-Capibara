`use strict`

const userForm = document.getElementById("contact-form");

/* name: value */
const receivedData = {};
function initializeReceivedData(receivedData) {
    const formData = new FormData(userForm);

    for (const [name] of formData.entries()) {
        receivedData[name] = null;
    }
}

/* name: <label> */
const requiredFields = {};
const errorClass = "highlight";
function initializeRequiredFields(requiredFields) {
    const requiredClass = ".contact-form-field--required";
    const requiredFieldsLabels = document.querySelectorAll(`${requiredClass} > label`);
    const requiredFieldsInput = document.querySelectorAll(`${requiredClass} > input, ${requiredClass} > textarea`);
    for (let i = 0; i < requiredFieldsLabels.length; i++) {
        const input = requiredFieldsInput.item(i);
        requiredFields[input.name] = requiredFieldsLabels.item(i);
    }
    addBlurEventListenersForInputs();
}

function addBlurEventListenersForInputs() {
    for (const [name, label] of Object.entries(requiredFields)) {
        const input = userForm[name];
        input.addEventListener("blur", () => {
            if (input.value === "") {
                label.classList.add(`${errorClass}`);
                input.classList.add(`${errorClass}`);
            } else if (name === "phone") {
                const numbers = input.value.replace(/\D+/g, '')
                if (numbers.length !== 11) {
                    input.classList.add("highlight");
                    label.classList.add("highlight");
                } else {
                    label.classList.remove(`${errorClass}`);
                    input.classList.remove(`${errorClass}`);
                }
            } else {
                label.classList.remove(`${errorClass}`);
                input.classList.remove(`${errorClass}`);
            }

            if (checkFormValidity(new FormData(userForm))) {
                activateSubmitButton();
            }
            else {
                deactivateSubmitButton();
            }
        })
    }
}

const submitButton = document.querySelector("#contact-form > button");
function activateSubmitButton() {
    submitButton.classList.add("filled");
}
function deactivateSubmitButton() {
    submitButton.classList.remove("filled");
}

function addSubmitEventListenerForForm() {
    userForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(userForm);
        let valid = checkFormValidity(formData);
        if (valid) {
            saveData(formData);
        }
        else {
            highlightRequiredFields(formData);
        }
    })
}

function checkFormValidity(formData) {
    let valid = true;

    for (let [name] of Object.entries(requiredFields)) {
        const value = formData.get(name);
        if (value === "") {
            return false;
        }
        if (name === "phone") {
            const numbers = value.replace(/\D+/g, '');
            if (numbers.length !== 11) {
                return false;
            }
        }
    }

    return valid;
}

function highlightRequiredFields(formData) {
    for (let [name, label] of Object.entries(requiredFields)) {
        const input = userForm[name];
        const value = formData.get(name);
        if (value === "") {
            input.classList.add("highlight");
            label.classList.add("highlight");
        } if (name === "phone") {
            const numbers = value.replace(/\D+/g, '');
            if (numbers.length !== 11) {
                input.classList.add("highlight");
                label.classList.add("highlight");
            }
        }
    }
}

function saveData(sourceForm) {
    for (let nameValue of sourceForm.entries()) {
        receivedData[nameValue[0]] = nameValue[1];
    }
    console.log(receivedData); // Mock for receiving data
}

const phoneInput = document.getElementById("contact-form__phone");
function formatPhoneField() {
    let value = phoneInput.value;
    let output;
    value = value.replace(/\D+/g, ''); // Remove everything that's not a number
    const valueLength = value.length;

    const area = value.substring(0, 1); // международный код
    const prefix = value.substring(1, 4); // код региона (префикс)
    const idFirstThree = value.substring(4, 7); // первые три номера id абонента
    const idSecondTwo = value.substring(7, 9); // вторые два номер id абонента
    const idLastTwo = value.substring(9, 11); // последние два номера id абонента

    if (valueLength < 1) { // не ввели ничего и нет кода уже
        output = `+${area}`;
    } else if (valueLength < 4) {
        output = `+${area} ${prefix}`;
    } else if (valueLength < 8) {
        output = `+${area} ${prefix} ${idFirstThree}`;
    } else if (valueLength < 10) {
        output = `+${area} ${prefix} ${idFirstThree}-${idSecondTwo}`;
    } else {
        output = `+${area} ${prefix} ${idFirstThree}-${idSecondTwo}-${idLastTwo}`;
    }
    phoneInput.value = output;
}

window.addEventListener("load", () => {
    initializeReceivedData(receivedData);
    initializeRequiredFields(requiredFields);
    addSubmitEventListenerForForm();
    phoneInput.addEventListener("keyup", formatPhoneField);
    phoneInput.addEventListener("focus", formatPhoneField);
})


