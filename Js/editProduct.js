
let products =JSON.parse( localStorage.getItem('products')) || products;

let productId = JSON.parse(localStorage.getItem('editProductId')) ;





let selectedProduct = products.find((i)=>{
    return i.id ===productId});
console.log(selectedProduct);


let productName = document.querySelector("#product-name");
let productDesc = document.querySelector("#product-desc");
let productSize = document.querySelector("#size");
let updateBtn = document.querySelector("#update");
let uploadImg = document.querySelector("#upload-img");

let productSizeValue;
let productImage;


productDesc.value = selectedProduct.desc;
productName.value= selectedProduct.title;
productSize.value = selectedProduct.size;
productImage = selectedProduct.imageUrl;
// // Events
productSize.addEventListener('change', getSize);
updateBtn.addEventListener('click', updateProduct);
 uploadImg.addEventListener('change', getImage);


function getSize(e){
    productSizeValue = e.target.value;
}

function updateProduct(e){
    e.preventDefault();
    selectedProduct.desc = productDesc.value;
    selectedProduct.title = productName.value;
    selectedProduct.size = productSizeValue;
    selectedProduct.imageUrl = productImage;
    localStorage.setItem('products',JSON.stringify(products));
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



