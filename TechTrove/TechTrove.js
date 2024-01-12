// for cart one
let itemCount = 0;
const multiplier = 1080.5; // Amount of the Samsung 

function updateItemCount() {
    document.getElementById("item-count").innerText = itemCount;
}

function increaseItemCount() {
    itemCount++;
    updateItemCount();
}

function decreaseItemCount() {
    if (itemCount > 0) {
        itemCount--;
        updateItemCount();
    }
}

function addToCart() {
    let totalItems = itemCount * multiplier;
    var snackbar = document.getElementById("snackbar");
    snackbar.innerText = `Added $${totalItems} items to the cart!`;
    snackbar.style.display = "block";
    setTimeout(function () {
        snackbar.style.display = "none";
        snackbar.innerText = "Snackbar Message"; // Reset the text
    }, 3000);
}
// alert(`Added $${totalItems} items to the cart!`);


// for cart two
let itemCountTwo = 0;
const multiplierTwo = 1165.9; // Amount of the Samsung 
function updateItemCountTwo() {
    document.getElementById("item-count-two").innerText = itemCountTwo;
}

function increaseItemCountTwo() {
    itemCountTwo++;
    updateItemCountTwo();
}

function decreaseItemCountTwo() {
    if (itemCountTwo > 0) {
        itemCountTwo--;
        updateItemCountTwo();
    }
}

function addToCartTwo() {
    ``
    const totalItemsTwo = itemCountTwo * multiplierTwo;
    var snackbar = document.getElementById("snackbar");
    snackbar.innerText = `Added $${totalItemsTwo} items to the cart!`;
    snackbar.style.display = "block";
    setTimeout(function () {
        snackbar.style.display = "none";
        snackbar.innerText = "Snackbar Message"; // Reset the text
    }, 3000);
    // alert(`Added $${totalItemsTwo} items to the cart!`);
}

// for cart three
let itemCountThree = 0;
const multiplierThree = 232.5; // Amount of Infinix hot 30i
function updateItemCountThree() {
    document.getElementById("item-count-three").innerText = itemCountThree;
}

function increaseItemCountThree() {
    itemCountThree++;
    updateItemCountThree();
}

function decreaseItemCountThree() {
    if (itemCountThree > 0) {
        itemCountThree--;
        updateItemCountThree();
    }
}

function addToCartThree() {
    const totalItemsThree = itemCountThree * multiplierThree;
    var snackbar = document.getElementById("snackbar");
    snackbar.innerText = `Added $${totalItemsThree} items to the cart!`;
    snackbar.style.display = "block";
    setTimeout(function () {
        snackbar.style.display = "none";
        snackbar.innerText = "Snackbar Message"; // Reset the text
    }, 3000);
    // alert(`Added $${totalItemsThree} items to the cart!`);
}

// cart 4
let itemCountFour = 0;
const multiplierFour = 1199.9;
function updateItemCountFour() {
    document.getElementById("item-count-four").innerText = itemCountFour;
}

function increaseItemCountFour() {
    itemCountFour++;
    updateItemCountFour();
}

function decreaseItemCountFour() {
    if (itemCountFour > 0) {
        itemCountFour--;
        updateItemCountFour();
    }
}

function addToCartFour() {
    const totalItemsFour = itemCountFour * multiplierFour;
    var snackbar = document.getElementById("snackbar");
    snackbar.innerText = `Added $${totalItemsFour} items to the cart!`;
    snackbar.style.display = "block";
    setTimeout(function () {
        snackbar.style.display = "none";
        snackbar.innerText = "Snackbar Message"; // Reset the text
    }, 3000);
    // alert(`Added $${totalItemsFour} items to the cart!`);
}

// sending messages 
let userAccount = null;

function sendMessage() {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("mobile-number").value;

    if (fullname && email && phoneNumber) {
        userAccount = { fullname, email, phoneNumber };
        displayOutput(`${fullname} Sent a Message `);
        document.getElementById("fullname").style.display = "none";
        document.getElementById("email").style.display = "none";
        document.getElementById("mobile-number").style.display = "none";

        document.getElementsByTag("label").style.display = "none"
        document.getElementsByTagName("button").style.display = "none"
    } else {
        displayOutput(`<b> Please fill in all the field </b>`)
    }
}

function displayOutput(message) {
    let outputDiv = document.getElementById("message-sent");
    outputDiv.innerHTML = `<p>${message}</p>`;
}

// mobile view 
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}