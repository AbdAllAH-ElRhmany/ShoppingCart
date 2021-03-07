// Get Data
let getUser = localStorage.getItem("username");
let getEmail = localStorage.getItem("email");
let getImg = localStorage.getItem("profileImage")? localStorage.getItem("profileImage") : "imges/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg";
let products = JSON.parse(localStorage.getItem('products'));
products = products.filter(item => {
    return item.byMe==="y"});
// Set Data

let user = document.querySelector("#username");
let user_email = document.querySelector("#email");
let profileImg = document.querySelector("#profileimg");
let productLength = document.querySelector("#product-length");

productLength.innerHTML += products.length;
user.innerHTML += getUser;
user_email.innerHTML += getEmail;
profileImg.src = getImg;

console.log(getImg);