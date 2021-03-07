// Login User
let username = document.getElementById("username");
let password = document.getElementById("password");
let loginBtn = document.getElementById("login");


loginBtn.addEventListener('click', login);


function login(e){
    e.preventDefault();
    if(password.value ==="" || username.value ===""){
        alert("Please Fill Data")
    } else if(localStorage.getItem("password") === password.value.trim() && localStorage.getItem("username") === username.value.trim()){
        setTimeout(() => {
            window.location.assign("index.html");
        }, 1500);
    }
    else{
        alert("Please Enter Valid Data")
    }
}