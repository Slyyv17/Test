let userAccount = null;

function createAccount() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let userID = document.getElementById('userID').value;

    if (username && email && userID) {
        userAccount = { username, email, userID };
        displayOutput(`Account created for ${username}`);
        // Show the library management form after account creation
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('libraryForm').style.display = 'block';
    } else {
        displayOutput('<b> Please fill in all fields. </b>');
    }
}

function performAction() {
    let action = document.getElementById('bookAction').value;
    let bookTitleElement = document.getElementById('bookTitle');
    let bookTitle = bookTitleElement.options[bookTitleElement.selectedIndex].text;

    switch (action) {
        case 'request':
            displayOutput(`Book "${bookTitle}" requested.`);
            break;
        case 'issue':
            displayOutput(`Book "${bookTitle}" issued.`);
            break;
        case 'cancel':
            displayOutput(`Order for book "${bookTitle}" canceled.`);
            break;
        case 'pay':
            displayOutput(`Fine paid to renew book "${bookTitle}".`);
            break;
        default:
            displayOutput('Invalid action.');
            break;
    }
}


function displayOutput(message) {
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>${message}</p>`;
}