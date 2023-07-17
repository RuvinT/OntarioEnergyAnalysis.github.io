document.addEventListener('DOMContentLoaded', function() {
  
  const signInForm = document.querySelector('.sign-in-htm');
  const signInUsername = document.getElementById('signin-user');
  const signInPassword = document.getElementById('signin-pass');
  const signInSubmit = document.getElementById('signin-submit');

  
  signInSubmit.addEventListener('click', function(e) {
    e.preventDefault();

    
    const username = signInUsername.value;
    const password = signInPassword.value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": username,
      "password": password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://boozcpu14b.execute-api.us-east-2.amazonaws.com/energylogin", requestOptions)
      .then(response => response.json())
      .then(result => {
 
        if (result[0].num == 1) {
          
          window.location.href = 'tableau.html';
        } else {
          alert('Invalid username or password. Please try again.');
        }
      
      })
      .catch(error => console.log('error', error));

    
  });
});
