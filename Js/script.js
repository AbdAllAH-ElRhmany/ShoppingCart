// Define Product
let productDom = document.querySelector('.products');
let addToCartBtn = document.querySelector('#addToCart');
let products = JSON.parse(localStorage.getItem('products')) || productsDB;

// Display Products
let drowProductsUI;
(drowProductsUI = function (products = []) {
	let productsUI = products.map((item) => {
		return `
        <div class="product-item align-items-center mb-4  d-flex" style="border: ${
			item.byMe === 'y' ? '1px solid #ccc' : ''
		}">
            <img src="${item.imageUrl}" class="product-item-img mr-4" alt="image">
            <div class="product-item-info">
                <a onclick='saveItemData(${
					item.id
				})' href="productDetails.html" class="product-item-info-title h3 text-capitalize mb-2">${item.title}</a>
                <p class="product-item-info-desc mb-2">${item.desc}</p>
                <span class="product-item-info-size d-block mb-2">Size: ${item.size}</span>
                <button class="add text-capitalize btn btn-info" onclick="editProduct(${item.id})" style="display:${
			item.byMe === 'y' ? 'block' : 'none'
		}" id="editProduct">Edit Product</button>
            </div><!-- ./product-item-info -->
            <div class="product-item-actions">
			<div>
			<button class="add text-capitalize btn btn-dark" onclick="addToCart(${
				item.id
			})" id="addToCart">add to cart</button>	
			</div>
			<div>
			<i class="favorite fas fa-heart fa-lg" style="color:${
				item.liked === true ? 'red' : ''
			}" onclick="addToFavorite(${item.id})"></i>	
			</div>
            </div><!-- ./product-item-actions -->
        </div><!-- ./product-item -->`;
	});
	productDom.innerHTML = productsUI.join('');
})(JSON.parse(localStorage.getItem('products')) || products);

// Add To Cart

function addToCart(id) {
	if (localStorage.getItem('username')) {
		products = JSON.parse(localStorage.getItem('products')) || products;
		let selectedItem = products.find(function (item) {
			return item.id === id;
		});
		let itemInCart = addedItems.some((i) => i.id == selectedItem.id);
		if (itemInCart) {
			addedItems = addedItems.map((p) => {
				if (p.id === selectedItem.id) p.qty++;
				return p;
			});
		} else {
			addedItems.push(selectedItem);
		}
		shoppingCartDiv.innerHTML = '';
		var numberOfProductsAtCart = 0;
		addedItems.forEach((item) => {
			shoppingCartDiv.innerHTML += `<p>${item.title} <span class='item-qty'>${item.qty}</span></p>`;
			numberOfProductsAtCart += item.qty;
		});
		// To Save Data After Adding Product To Cart
		localStorage.setItem('productsInCart', JSON.stringify(addedItems));
		// To Get The Number Of Products At Cart After Adding Product
		localStorage.setItem('numberOfProductsAtCart', numberOfProductsAtCart);
		badgeDom.style.display = 'block';
		badgeDom.innerHTML = localStorage.getItem('numberOfProductsAtCart');
	} else {
		window.location.assign('login.html');
	}
}

function getUniqeArr(arr, filterType) {
	let uniqe = arr
		.map((item) => item[filterType])
		.map((item, i, final) => final.indexOf(item) === i && i)
		.filter((item) => arr[item])
		.map((item) => arr[item]);
	return uniqe;
	console.log(uniqe);
}

// JSON.stringify()    obj to string
// JSON.parse()    string to obj

// Save Item Data

function saveItemData(id) {
	localStorage.setItem('productId', id);
}

// Search
let searchInput = document.querySelector('#search');
let searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click', search);
searchInput.addEventListener('keyup', function (e) {
	search();
	if (e.keyCode === 13) {
	}
});

function search() {
	products = JSON.parse(localStorage.getItem('products')) || products;
	title = searchInput.value;
	let selectedItem = products.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
	drowProductsUI(selectedItem);
	if (title.trim() === '') {
		drowProductsUI(products);
	}
}

// Add To Favorite
let favoriteItems = products.filter((item) =>  item.liked === true)
	? products.filter((item) =>  item.liked === true)
	: [];
function addToFavorite(id) {
	if (localStorage.getItem('username')) {
		console.log(id);
		console.log(products);
		let selectedItem = products.find(function (item) {
			return item.id === id;
		});
		let itemInCart = favoriteItems.some((i) => i.id == selectedItem.id);
		if (itemInCart) {
			return;
		} else {
			favoriteItems.push(selectedItem);
		}

		localStorage.setItem('productsInFavorite', JSON.stringify(favoriteItems));
		// let uniqeProducts =  getUniqeArr(favoriteItems,'id');
		// localStorage.setItem('productsInFavorite', JSON.stringify(uniqeProducts));
		console.log(selectedItem);
		products.map((item) => {
			if (item.id == selectedItem.id) {
				item.liked = true;
			}
		});
		localStorage.setItem('products', JSON.stringify(products));
		drowProductsUI(products);
	} else {
		window.location.assign('login.html');
	}
}

// Size Filter

let sizeFilter = document.querySelector('#filter-size');

sizeFilter.addEventListener('change', getProductFilterBySize);

function getProductFilterBySize(e) {
	let val = e.target.value;
	let flProducts = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : products;
	if (val === 'all') {
		drowProductsUI(products);
	} else {
		flProducts = products.filter((i) => i.size === val);
		drowProductsUI(flProducts);
	}
}

// Edit Product

function editProduct(id) {
	localStorage.setItem('editProductId', id);
	window.location.assign('editProduct.html');
}
