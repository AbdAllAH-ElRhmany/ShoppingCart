
// Shopping Cart Icon And Menu

let addedItems =localStorage.getItem('productsInCart') ?
JSON.parse(localStorage.getItem('productsInCart')):[];
let shoppingCart = document.querySelector(".shoppingCart");
let shoppingCartMenu = document.querySelector(".cart-products");
let shoppingCartDiv = document.querySelector(".cart-products div");
let badgeDom = document.querySelector(".badge");
(function cartMenuData(){
    if (addedItems) {
        addedItems.map((item) =>{
            badgeDom.style.display = 'block';
            shoppingCartDiv.innerHTML +=  `<p>${item.title} <span class='item-qty'>${item.qty}</span></p>`;
        });
        badgeDom.innerHTML += addedItems.length;
    }
})();

// To Get The Number Of Products At Cart After Page Loading
badgeDom.innerHTML = localStorage.getItem("numberOfProductsAtCart");


// Open Cart Menu 
shoppingCart.addEventListener('click', openCartMenu)


function openCartMenu (){
    if (shoppingCartDiv.innerHTML !="") {
        if (shoppingCartMenu.style.display=='block') {
            shoppingCartMenu.style.display='none';
        }else{
            shoppingCartMenu.style.display='block';
        }
    }
}
