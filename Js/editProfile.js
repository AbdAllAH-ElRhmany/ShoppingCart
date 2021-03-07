
let profileName = document.querySelector("#profile-name");
let profileEmail = document.querySelector("#profile-desc");
let updateBtn = document.querySelector("#update");
let uploadImg = document.querySelector("#upload-img");

let productImage;


// Get Data
let getUser = localStorage.getItem("username");
let getEmail = localStorage.getItem("email");
let products = JSON.parse(localStorage.getItem('products'));
products = products.filter(item => {item.byMe==="y"});
// Set Data

(function setData(){
    profileName.value = getUser;
    profileEmail.value = getEmail;

}());


updateBtn.addEventListener('click', upDataProfile);
uploadImg.addEventListener('change', getImage);


function upDataProfile(){
    localStorage.setItem("username", profileName.value);
    localStorage.setItem("email", profileEmail.value);
    console.log(productImage);
    localStorage.setItem("profileImage", productImage);
    setData();
}




function getImage(){
    let file = this.files[0];
    let types = ["image/jpeg", "image/png","image/jpg"]
    if(types.indexOf(file.type) ==-1){
        alert("Type Not Support..");
        return;
    }
    if(file.size> 2* 1024 *1024){
        alert("Image Not Exced 2MG");
        return;
    }
    getImageBase64(file);
    // productImage = URL.createObjectURL(file);
}


function getImageBase64(file){
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function(){
        productImage = reader.result;
    };
    reader.onerror = function(){
        alert("Error...");
    };
}

