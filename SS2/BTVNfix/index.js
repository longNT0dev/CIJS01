let User = [{ email: "dinhtuankhang@gmail.com", password: "12345678" }, { email: "khang@gmail.com", password: "checkpassword" }, { email: "tuankhang@gmail.com", password: "matkhaucheck" }]
let button = document.getElementById("inputButton")
let emailInput = document.getElementById("emailInput")
let passwordInput = document.getElementById("passwordInput")
let showPassword = document.getElementById("showPassword")
let emailError = document.getElementById("emailError")
let passwordError = document.getElementById("passwordError")
let isLogin = false


function checkEmail(email) {
    if (email) {
        if (email.includes("@")) {
            styleTag(emailInput, "", "black")
            return true
        }
        else {
            styleTag(emailInput, "Please enter a valid email", "red")
        }
    }
    else {
        styleTag(emailInput, "Please enter an email", "red")
    }
}

function styleTag(tag, message, borderColor = "black") {
    tag.innerText = message
    tag.style.borderColor = borderColor
}

function checkPassword(password) {
    if (password) {
        if (password.length > 6 && password.length < 20) {
            styleTag(passwordInput, "", "black")
            return true
        }
        else {
            styleTag(passwordInput, "Password must > 6 and < 20", "red")
        }
    }
    else {
        styleTag(passwordInput, "Please enter a password", "red")
    }
}

function handleLogin(email, password) {
    for (let i = 0; i < User.length; i++) {
        if ((email == User[i].email) && (password == User[i].password)) {
            console.log("dang nhap thanh cong")
            isLogin = true
        }
    }
    if (!isLogin) {
        console.log("dang nhap that bai")
    }
}

button.addEventListener("click", (event) => {
    event.preventDefault()

    if (checkEmail(emailInput.value) && checkPassword(passwordInput.value)) {
        handleLogin(emailInput.value, passwordInput.value)
    }
})


showPassword.addEventListener("click", (e) => {
    e.preventDefault()
    if (passwordInput.type === "password") {
        passwordInput.type = "text"
    }
    else {
        passwordInput.type = "password"
    }
})

