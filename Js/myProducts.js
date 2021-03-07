let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let productDom = document.querySelector(".products");
let noItems = document.querySelector("#no-items");



// Display Products

(drowProductsUI= function (products =[]){   
    let myproducts = products.filter(function (item){
        return item.byMe ==="y";
    });
    if(myproducts.length){
        let productsUI = myproducts.map((item) =>{
            return `
            <div class="product-item align-items-center mb-4  d-flex" style="border: ${item.byMe==='y'? '1px solid #ccc' : ''}">
                <img src="${item.imageUrl}" class="product-item-img mr-4" alt="image">
                <div class="product-item-info">
                    <a onclick='saveItemData(${item.id})' href="productDetails.html" class="product-item-info-title h3 text-capitalize mb-2">${item.title}</a>
                    <p class="product-item-info-desc mb-2">${item.desc}</p>
                    <span class="product-item-info-size d-block mb-2">Size: ${item.size}</span>
                    </div><!-- ./product-item-info -->
                    <div class="product-item-actions">
                    <button class="add text-capitalize btn btn-dark" onclick="editProduct(${item.id})" style="display:${item.byMe==='y'? 'block': 'none'}" id="editProduct">Edit Product</button>
                    <button class="add text-capitalize btn btn-dark" onclick="deleteProduct(${item.id})" id="deleteProduct">delete Product</button>
                </div><!-- ./product-item-actions -->
            </div><!-- ./product-item -->`;
        });
        productDom.innerHTML = productsUI.join("");
    } else{
        productDom.innerHTML ='';
        noItems.innerHTML="There Is No Products...";
    }
})( JSON.parse(localStorage.getItem("products")) || productsDB ||products);



// Edit Product
function editProduct(id){
    localStorage.setItem('editProductId', id)
    window.location.assign("editProduct.html");
}


//Delete Product
function deleteProduct(id){
    products = products.filter(function (item){
        return item.id !== id;
    });
    let myproducts = products.filter(function (item){
        return item.byMe ==="y";
    });
    localStorage.setItem("products", JSON.stringify(products));
    drowProductsUI(myproducts);
}

