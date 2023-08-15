document.addEventListener('DOMContentLoaded', () => {
  // Get the signup form elements
  const signUpForm = document.querySelector('.sign-up-htm'); // Get the signup form using its class
  const signUpUsername = document.getElementById('signup-user'); // Get the username input element
  const signUpPassword = document.getElementById('signup-pass'); // Get the password input element
  const signUpRepeatPassword = document.getElementById('signup-repeat-pass'); // Get the repeat password input element
  const signUpEmail = document.getElementById('signup-email'); // Get the email input element
  const signUpSubmit = document.getElementById('signup-submit'); // Get the submit button element

  signUpSubmit.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default form submission

    errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none';

    // Get the values from the input elements
    const username = signUpUsername.value;
    const password = signUpPassword.value;
    const repeatPassword = signUpRepeatPassword.value;
    const email = signUpEmail.value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      
      "username": username,
      "email": email,
      "password": password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    // Validate the form inputs
    if (username === '') {
      errorMessage.innerText ='Please enter a username.'
      errorMessage.style.display = 'block';
   
      return;
    }

    if (password === '') {
      errorMessage.innerText ='Please enter a password.'
      errorMessage.style.display = 'block';
      return;
    }

    if (password !== repeatPassword) {
      errorMessage.innerText ='Passwords do not match. Please try again.'
      errorMessage.style.display = 'block';
      return;
    }

    if (email === '') {
      errorMessage.innerText ='Please enter an email address.'
      errorMessage.style.display = 'block';
      return;
    }

    fetch("https://uif12sbvza.execute-api.us-east-2.amazonaws.com/EnergySignUp", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    // If all inputs are valid, display a success message
    alert('Signup successful!');
  });
});
