`use strict`

const userForm = document.getElementById("contact-form")

/* name: value */
const receivedData = {}
function initializeReceivedData(receivedData) {
    const formData = new FormData(userForm)

    for (let nameValue of formData.entries())
        receivedData[nameValue[0]] = null
}

/* name: <label> */
const requiredFields = {}
const errorClass = "highlight"
function initializeRequiredFields(requiredFields) {
    const requiredClass = ".contact-form-field--required"
    const requiredFieldsLabels = document.querySelectorAll(`${requiredClass} > label`)
    const requiredFieldsInput = document.querySelectorAll(`${requiredClass} > input, ${requiredClass} > textarea`)
    for (let i = 0; i < requiredFieldsLabels.length; i++) {
        const input = requiredFieldsInput.item(i)
        requiredFields[input.name] = requiredFieldsLabels.item(i)
    }
    addBlurEventListenersForInputs()
}

function addBlurEventListenersForInputs() {
    for (let [name, label] of Object.entries(requiredFields)) {
        const input = userForm[name]
        input.addEventListener("blur", () => {
            if (input.value === "") {
                label.classList.add(`${errorClass}`)
                input.classList.add(`${errorClass}`)
            } else {
                label.classList.remove(`${errorClass}`)
                input.classList.remove(`${errorClass}`)
            }

            if (checkFormValidity(new FormData(userForm)))
                activateSubmitButton()
            else
                deactivateSubmitButton()
        })
    }
}

const submitButton = document.querySelector("#contact-form > button")
function activateSubmitButton() {
    submitButton.classList.add("filled")
}
function deactivateSubmitButton() {
    submitButton.classList.remove("filled")
}

window.addEventListener("load", () => {
    initializeReceivedData(receivedData)
    initializeRequiredFields(requiredFields)
    addSubmitEventListenerForForm()
})

function addSubmitEventListenerForForm() {
    userForm.addEventListener("submit", async (event) => {
        event.preventDefault()

        const formData = new FormData(userForm)
        let valid = checkFormValidity(formData)
        if (valid)
            saveData(formData)
        else
            highlightRequiredFields(formData)
    })
}

function checkFormValidity(formData) {
    let valid = true

    for (let [name] of Object.entries(requiredFields)) {
        const value = formData.get(name)
        if (value === "")
            return false
    }

    return valid
}

function highlightRequiredFields(formData) {
    for (let [name, label] of Object.entries(requiredFields)) {
        const input = userForm[name];
        const value = formData.get(name)
        if (value === "") {
            input.classList.add("highlight")
            label.classList.add("highlight")
        }
    }
}

function saveData(sourceForm) {
    for (let nameValue of sourceForm.entries())
        receivedData[nameValue[0]] = nameValue[1]
    console.log(receivedData) // Mock for receiving data
}
