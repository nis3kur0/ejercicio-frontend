
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('email-error'); 

 
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = emailInput.value;

    if (!validateEmail(email)) {
      errorMessage.textContent = 'Invalid Email.'; 
      return; 
    }
    window.location.href = "success.html"; 

    
  });
 