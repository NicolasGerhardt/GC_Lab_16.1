document.querySelector('#submitButton .btn').addEventListener('click', validateAll);
document.querySelector('#FirstName .form-control').addEventListener('keyup', validateFirstName);
document.querySelector('#LastName .form-control').addEventListener('keyup', validateLastName);
document.querySelector('#Email .form-control').addEventListener('keyup', validateEmail);
document.querySelector('#Password .form-control').addEventListener('keyup', validatePassword);
document.querySelector('#ConfirmPassword .form-control').addEventListener('keyup', validateConfirmPassword);


function validateAll() {
    const errorLabel = document.querySelector('#submitButton .text-danger');
    let errors = 0;

    errors += validateFirstName();
    errors += validateLastName();
    errors += validateEmail();
    errors += validatePassword();
    errors += validateConfirmPassword();

    if (errors > 0) {
        errorLabel.textContent = 'Correct above errors before submitting';
        errorLabel.style = 'display: block';
    } else {
        errorLabel.style = 'display: none';
        document.querySelector('form').submit();
    }
    return errors;
}

function validateFirstName() {
    const input = document.querySelector('#FirstName .form-control');
    const errorLabel = document.querySelector('#FirstName .text-danger');

    if (input.value.length < 2) {
        errorLabel.textContent = 'Too Short, must be at least 2 characters long';
        errorLabel.style = 'display: block';
        return 1;
    } else {
        errorLabel.style = 'display: none';
        return 0;
    }
}

function validateLastName() {
    const input = document.querySelector('#LastName .form-control');
    const errorLabel = document.querySelector('#LastName .text-danger');

    if (input.value.length < 2) {
        errorLabel.textContent = 'Too Short, must be at least 2 characters long';
        errorLabel.style = 'display: block';
        return 1;
    } else {
        errorLabel.style = 'display: none';
        return 0;
    }
}

function validateEmail() {
    const input = document.querySelector('#Email .form-control');
    const errorLabel = document.querySelector('#Email .text-danger');

    //Sorced regex form: https://emailregex.com/
    const emailRegEx =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const matchesArr = input.value.match(emailRegEx);


    if (!matchesArr) {
        errorLabel.textContent = 'Must be valid Email Address';
        errorLabel.style = 'display: block';
        return 1;
    } else {
        errorLabel.style = 'display: none';
        return 0;
    }
}

function validatePassword() {
    const input = document.querySelector('#Password .form-control');
    const errorLabel = document.querySelector('#Password .text-danger');
    errorLabel.textContent = '';
    let errors = 0;

    if (input.value.length < 8) {
        errors++;
        errorLabel.innerHTML = 'Too Short, must be at least 8 characters long <br />';
        errorLabel.style = 'display: block';
    }

    if (!input.value.match(/[A-Z]/g)) {
        errors++;
        errorLabel.innerHTML += 'Must have at least 1 Upper Case Letter <br />';
        errorLabel.style = 'display: block';
    }

    if (!input.value.match(/[a-z]/g)) {
        errors++;
        errorLabel.innerHTML += 'Must have at least 1 Lower Case Letter <br />';
        errorLabel.style = 'display: block';
    }

    if (!input.value.match(/[0-9]/g)) {
        errors++;
        errorLabel.innerHTML += 'Must have at least 1 Number <br />';
        errorLabel.style = 'display: block';
    }

    errors += validateConfirmPassword()

    if (!input.value.match(/[^A-Za-z0-9]/g)) {
        errors++;
        errorLabel.innerHTML += 'Must have at least 1 Symbol <br />';
        errorLabel.style = 'display: block';
    }

    if (errors === 0) {
        errorLabel.style = 'display: none';
    }
    
    return errors;
}

function validateConfirmPassword() {
    const passwordControl = document.querySelector('#Password .form-control');
    const confirmPasswordControl = document.querySelector('#ConfirmPassword .form-control');
    const errorLabel = document.querySelector('#ConfirmPassword .text-danger');

    if (passwordControl.value === confirmPasswordControl.value) {
        errorLabel.style = 'display: none';
        return 0;
    } else {
        errorLabel.textContent = 'Must Exactly Match Password';
        errorLabel.style = 'display: block';
        return 1;
    }
    
}
