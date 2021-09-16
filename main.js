// get Element
const cart_items = document.getElementById('cart');

// ES6


// ES6
function addProduct(name, category) {
    return {
        name,
        category
    }
}

var getProduct = addProduct("iPhone 11", "Gadget");
cart_items.innerHTML = `Product: ${getProduct.name} Category: ${getProduct.category}`;