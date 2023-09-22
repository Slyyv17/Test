// for the reacted heart
function changeColor() {
    let icon = document.getElementById('heart');
    icon.style.color = 'red';
    confirm("You Love The Product")
}

// for shopping cart
// Define a function which will work as method
function addPrice(amount) {
    with (this) {
        price = amount;
    }
}

function Product(name, company) {
    this.name = name;
    this.company = company;
    this.price = 0;
    this.addPrice = addPrice; // Assign that method as a property
}

function cartGo() {
    let myProduct = new Product("Men's Collection", "Bon Voyage");
    myProduct.addPrice("$145.35");

    let otherProduct = confirm("Press 'Ok to continue or cancel it");
    if (otherProduct == true) {
        alert("You have successfully added this to your cart");
        alert("Product name is: " + myProduct.name);
        alert("Product company is: " + myProduct.company);
        alert("Product price is: " + myProduct.price);
        return true;
    }
    else {
        alert("You've cancelled the added item");
        return false;
    }

}

function cartGoProd2() {
    let myProduct = new Product("Women's Collection", "Bon Voyage");
    myProduct.addPrice("$115.05");

    let otherProduct = confirm("Press 'Ok to continue or cancel it");
    if (otherProduct == true) {
        alert("You have successfully added this to your cart");
        alert("Product name is: " + myProduct.name);
        alert("Product company is: " + myProduct.company);
        alert("Product price is: " + myProduct.price);
        return true;
    }
    else {
        alert("You've cancelled the added item");
        return false;
    }
}

function cartGoProd3() {
    let myProduct = new Product("Accessories", "Bon Voyage");
    myProduct.addPrice("$95.99");

    let otherProduct = confirm("Press 'Ok to continue or cancel it");
    if (otherProduct == true) {
        alert("You have successfully added this to your cart");
        alert("Product name is: " + myProduct.name);
        alert("Product company is: " + myProduct.company);
        alert("Product price is: " + myProduct.price);
        return true;
    }
    else {
        alert("You've cancelled the added item");
        return false;
    }
}

/* for the reacted heart of the order buttons */
function changeBgColor() {
    let Reacted_icon = document.getElementById('reacted-heart');
    Reacted_icon.style.color = 'red';
    confirm("You Love The Product")
}


/* the order button for men's collection */
function orderBtn() {
    let myProduct = new Product("BKC Holy Cross Varsity", "Bon Voyage");
    myProduct.addPrice("$30.65");

    let otherProduct = confirm("Press 'Ok to continue or cancel it");
    if (otherProduct == true) {
        alert("You have successfully added this to your cart");
        alert("Product name is: " + myProduct.name);
        alert("Product company is: " + myProduct.company);
        alert("Product price is: " + myProduct.price);
        return true;
    }
    else {
        alert("You Have Cancelled your order");
        return false;
    }

}