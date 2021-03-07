let productDom = document.querySelector(".products");
let noItems = document.querySelector("#no-items");


function drowCartProductsUI(allProducts =[]){
    let products= JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
    if (products.length ===0) {
        noItems.innerHTML ="There is no products <br> Shopping First"
    }
        let productsUI = products.map((item) =>{
        return `
        <div class="product-item align-items-center mb-4  d-flex">
            <img src="${item.imageUrl}" class="product-item-img mr-4" alt="image">
            <div class="product-item-info">
            <a href="productDetails.html" onclick='saveItemData(${item.id})' class="product-item-info-title h3 text-capitalize mb-3">${item.title}</a>
                <p class="product-item-info-desc mb-3">${item.desc}</p>
                <span class="product-item-info-size">Size: ${item.size}</span><br>
                <span class="product-item-info-size">Quantity: ${item.qty}</span>
            </div><!-- ./product-item-info -->
            <div class="product-item-actions">
                <button class="add text-capitalize btn btn-dark" onclick="removeFromCart(${item.id})" id="removeFromCart">remove From cart</button>
                <i class="favorite far fa-heart fa-lg"></i>
            </div><!-- ./product-item-actions -->
        </div><!-- ./product-item -->`;
    });
    productDom.innerHTML = productsUI.join("");
};

drowCartProductsUI();

function removeFromCart(id){
    let productsInCart = localStorage.getItem("productsInCart") ;
    console.log(id);
    if (productsInCart) {
        productsInCart = JSON.parse(productsInCart);
        let filteredItems = productsInCart.filter((item) => item.id !==id);
        localStorage.setItem("productsInCart", JSON.stringify(filteredItems));
        drowCartProductsUI(filteredItems);
    }
}



function saveItemData(id){
    localStorage.setItem('productId', id);
}
