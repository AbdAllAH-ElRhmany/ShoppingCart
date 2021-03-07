// Register User
let email = document.getElementById("email");
let username = document.getElementById("username");
let password = document.getElementById("password");
let signUp = document.getElementById("signUp");


signUp.addEventListener('click', register);

function register(e){
    e.preventDefault();
    if(email.value ===""|| password.value ==="" || username.value ===""){
        alert("Please Fill Data")
    } else{
        localStorage.setItem("username", username.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)
    }
    setTimeout(() => {
        window.location.assign("login.html");
    }, 1500);
}