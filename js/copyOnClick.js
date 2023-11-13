/* Copy phone number */
const phone = document.getElementById("phone");
const copyPhone = async () => {
    const number = phone.innerText.replaceAll(" ", " ");
    await navigator.clipboard.writeText(number);
}

/* Copy email */
const email = document.getElementById("email");
const copyEmail = async () => {
    const mail = email.innerText;
    await navigator.clipboard.writeText(mail);
}
