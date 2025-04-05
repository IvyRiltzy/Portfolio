// Listen for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    let isValid = true; // Track if the form is valid
    let errorMessage = ''; // Store any error messages
  
    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Validate name (ensure it's not empty)
    if (name === '') {
      isValid = false;
      errorMessage += 'Name is required.<br>';
    }
  
    // Validate email (check if it's a valid email)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      isValid = false;
      errorMessage += 'Please enter a valid email address.<br>';
    }
  
    // Validate message (ensure it's not empty)
    if (message === '') {
      isValid = false;
      errorMessage += 'Message cannot be empty.<br>';
    }
  
    // Show the error message if the form is invalid
    if (!isValid) {
      document.getElementById('error-message').innerHTML = errorMessage;
    } else {
      // If the form is valid, show a success message
      document.getElementById('error-message').innerHTML = 'Your message has been sent!';
    }
  });
  
  