/* Utility Functions */
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

/* Copy phone number */
const phone = document.getElementById("phone");
const phoneCopyTooltip = document.getElementById("phone-copy-tooltip")
const copyPhone = async () => {
    await copyField(phone);
    await playFadeInFadeOut(phoneCopyTooltip);
}

/* Copy email */
const email = document.getElementById("email");
const emailCopyTooltip = document.getElementById("email-copy-tooltip")
const copyEmail = async () => {
    await copyField(email);
    await playFadeInFadeOut(emailCopyTooltip);
}


