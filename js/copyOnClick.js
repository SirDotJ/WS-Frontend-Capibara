/* Copy phone number */
const phone = document.getElementById("phone");
const copyPhone = async () => {
    const number = phone.innerHTML.replaceAll("&nbsp;", " ");
    await navigator.clipboard.writeText(number);
}

/* Copy email */
const email = document.getElementById("email");
const copyEmail = async () => {
    const mail = email.innerHTML;
    await navigator.clipboard.writeText(mail);
}