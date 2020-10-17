let errorMsg = document.getElementById("error-message");
let emailInput = document.getElementById("email-address");
let submitBtn = document.getElementById("notify-me");


function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

submitBtn.onclick = () => {
    return emailIsValid(emailInput.value) ? location.reload() : errorMsg.style.display = 'block';
}