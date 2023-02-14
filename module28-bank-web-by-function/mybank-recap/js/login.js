// Step 1: add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function(){

    // step 2: get the email address from email input field.
        // always remember to use .value to get text from an input field.
    // 2.1: get email
    // 2.2: set id on the html element
    // 2.3: get the element using (.value)
    // 2.4: get the value from the element
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    
    // step 3: get password from password input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // step 4: verify email & password
    if (email === 'mhnoman@gmail.com' && password === 'noman'){
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid Username or Password');
    }

})

