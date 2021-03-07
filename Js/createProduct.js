let productName = document.querySelector("#product-name");
let productDesc = document.querySelector("#product-desc");
let productSize = document.querySelector("#size");
let createBtn = document.querySelector("#createBtn");
let uploadImg = document.querySelector("#upload-img");

let productSizeValue;
let productImage;

// Events
productSize.addEventListener('change', getSize);
createBtn.addEventListener('click', createProduct);
uploadImg.addEventListener('change', getImage);


function getSize(e){
    productSizeValue = e.target.value;
}

function createProduct(e){
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem('products')) || productsDB;
    let nameValue = productName.value;
    let descValue = productDesc.value;

    if (nameValue&& descValue&& productSizeValue) {
        
            let obj ={
                id: allProducts ? allProducts.length +1 :1,
                imageUrl: productImage,
                title: nameValue,
                desc: descValue,
                size: productSizeValue,
                qty:1,
                byMe: "y"
            };
            let newProducts = allProducts ?  [...allProducts, obj] : obj;
            localStorage.setItem('products',JSON.stringify(newProducts));
            productName.value="";
            productDesc.value="";
            productSize.value = "";
    } else{
        alert("Enter Data ....");
    }
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