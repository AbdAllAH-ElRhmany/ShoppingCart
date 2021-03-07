let userinfo = document.querySelector("#user-info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logoutBtn = document.getElementById("logout");
let username = localStorage.getItem('username');

if(username){
    links.remove();
    userinfo.style.display = 'flex';
    userDom.innerHTML = username;
}

logoutBtn.addEventListener("click", logout);

function logout(){
    localStorage.clear();
    setTimeout(() => {
        window.location.assign("register.html");
    }, 1500);
}