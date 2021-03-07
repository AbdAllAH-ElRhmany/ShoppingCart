let products = JSON.parse(localStorage.getItem('products')) || productsDB;
let productId = localStorage.getItem("productId")
let productDetails = document.querySelector(".product-details");

let selectedProduct = products.find((item)=>{
    return item.id == productId;
});
console.log(selectedProduct);


(function drowProductDetailsUI(){
    productDetails.innerHTML = `
    <img src="${selectedProduct.imageUrl}" class="product-details-img" alt="image">
    <h2 class="product-details-title mb-3">${selectedProduct.title}</h2>
    <span class="product-details-size mb-2 d-block">Size: ${selectedProduct.size}</span>
    <button class="add text-capitalize btn btn-dark" onclick="editProduct(${selectedProduct.id})" style="display:${selectedProduct.byMe==='y'? 'block': 'none'}" id="editProduct">Edit Product</button>
    `;
    
})();



// Edit Product

function editProduct(id){
    localStorage.setItem('editProductId', id)
    window.location.assign("editProduct.html");
}