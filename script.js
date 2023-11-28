document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // For simplicity, hardcoding username and password here
    const username = 'sosemprego';
    const password = 'sosemprego';
  
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
  
    if (enteredUsername === username && enteredPassword === password) {
      // Redirect to another page after successful login
      window.location.href = 'agendamento.html'; // Replace 'welcome.html' with your desired page
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });
  


