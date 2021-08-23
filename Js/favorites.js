let productDom = document.querySelector(".products");
let noItems = document.querySelector("#no-items");
let products = JSON.parse(localStorage.getItem('products')) || productsDB;

function drowFavoriteProductsUI(allProducts =[]){
    let products= JSON.parse(localStorage.getItem("productsInFavorite")) || allProducts;
    if (products.length ===0) {
        noItems.innerHTML ="There is no products <br> Shopping First"
    }
        let productsUI = products.map((item) =>{
        return `
        <div class="product-item align-items-center mb-4  d-flex">
            <img src="${item.imageUrl}" class="product-item-img mr-4" alt="image">
            <div class="product-item-info">
            <a href="productDetails.html" class="product-item-info-title h3 text-capitalize mb-3">${item.title}</a>
                <p class="product-item-info-desc mb-3">${item.desc}</p>
                <span class="product-item-info-size">Size: ${item.size}</span><br>
                <span class="product-item-info-size">Quantity: ${item.qty}</span>
            </div><!-- ./product-item-info -->
            <div class="product-item-actions">
                <button class="add text-capitalize btn btn-dark" onclick="removeFromFavorates(${item.id})" id="removeFromFavorates">remove From favorates</button>
                <i class="favorite far fa-heart fa-lg"></i>
            </div><!-- ./product-item-actions -->
        </div><!-- ./product-item -->`;
    });
    productDom.innerHTML = productsUI.join("");
};

drowFavoriteProductsUI();

function removeFromFavorates(id){
    let productsInFavorite = localStorage.getItem("productsInFavorite") ;
    if (productsInFavorite) {
        productsInFavorite = JSON.parse(productsInFavorite);
        let filteredItems = productsInFavorite.filter((item) => item.id !==id);
        localStorage.setItem("productsInFavorite", JSON.stringify(filteredItems));
        drowFavoriteProductsUI(filteredItems);
        products = products.filter((item) => {
			if (item.id === id) {
				item.liked = false;
				console.log('True');
			}
            return item;
		});
        localStorage.setItem('products', JSON.stringify(products));
    }
}








