// import HTML elements through their Id's
let formEl = document.getElementById("registrationForm");
let firstNameEl = document.getElementById('firstname');
let lastNameEl = document.getElementById('lastname');
let mailEl = document.getElementById('mail');
let passwordEl = document.getElementById('password');
let confirmPasswordEl = document.getElementById('confirmPassword');
let successTextEl = document.getElementById("successText");

let errorFirstNameEl = document.getElementById("errorFirstName");
let errorLastNameEl = document.getElementById("errorLastName");
let errorMailEl = document.getElementById("errorMail");
let errorPasswordEl = document.getElementById("errorPassword");
let errorConfirmPasswordEl = document.getElementById("errorConfirmPassword");



// Validate the FirstName
let validateFirstName = function() {
    if (firstNameEl.value === "") {
        firstNameEl.style.borderColor = "#dc3545";
        errorFirstNameEl.textContent = "*Required";
        successTextEl.textContent = "";
    } else {
        errorFirstNameEl.textContent = "";
        firstNameEl.style.borderColor = "";
    }

};

// Validate the LastName
let validateLastName = function() {
    if (lastNameEl.value === "") {
        lastNameEl.style.borderColor = "#dc3545";
        errorLastNameEl.textContent = "*Required";
        successTextEl.textContent = "";
    } else {
        errorLastNameEl.textContent = "";
        lastNameEl.style.borderColor = "";
    }

};

// Validate the Mail
let validateMail = function() {
    if (mailEl.value === "") {
        mailEl.style.borderColor = "#dc3545";
        errorMailEl.textContent = "*Required";
        successTextEl.textContent = "";
    } else {
        errorMailEl.textContent = "";
        mailEl.style.borderColor = "";
    }

};

// Validate the Password
let validatePassword = function() {
    if (passwordEl.value === "") {
        passwordEl.style.borderColor = "#dc3545";
        errorPasswordEl.textContent = "*Required";
        successTextEl.textContent = "";
    } else if (passwordEl.value.length < 6) {
        errorPasswordEl.textContent = "*Password must be 5 letters";
        successTextEl.textContent = "";
    } else {
        errorPasswordEl.textContent = "";
        passwordEl.style.borderColor = "";
    }



};

// Validate the Confirm Password
let validateConfirmPassword = function() {
    if (confirmPasswordEl.value === "") {
        confirmPasswordEl.style.borderColor = "#dc3545";
        errorConfirmPasswordEl.textContent = "*Required";
        successTextEl.textContent = "";
    } else {
        errorConfirmPasswordEl.textContent = "";
        confirmPasswordEl.style.borderColor = "";
    }

};


// Add Events to the HTML elements
firstNameEl.addEventListener("blur", validateFirstName);
lastNameEl.addEventListener("blur", validateLastName);
mailEl.addEventListener("blur", validateMail);
passwordEl.addEventListener("blur", validatePassword);
confirmPasswordEl.addEventListener("blur", validateConfirmPassword);


// Validate the password and confirmPassword
let validateMatchPassword = function() {
    let passwordValue = passwordEl.value;
    let confirmPasswordValue = confirmPasswordEl.value;


    if (confirmPasswordValue === "") {
        errorConfirmPasswordEl.textContent = "*Required";
    } else if (confirmPasswordValue !== "" && confirmPasswordValue !== passwordValue) {
        errorConfirmPasswordEl.textContent = "Password must be same";
    } else {
        errorConfirmPasswordEl.textContent = "";
        successTextEl.textContent = "Registration Successful";
    }
    

};



// Submit the UserInputs
formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFirstName();
    validateLastName();
    validateMail();
    validatePassword();
    validateConfirmPassword();
    validateMatchPassword();
    
});
