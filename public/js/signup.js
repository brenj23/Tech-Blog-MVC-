document.addEventListener('DOMContentLoaded', (event) => {
    const signupForm = document.getElementById('signup-form');
  
    const signupFormHandler = async (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
  
      if (username && email && password) {
        try {
          const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
          });
  
          if (response.ok) {
            document.location.replace('/profile');
          } else {
            const errorMessage = await response.json();
            console.error('Failed to sign up:', errorMessage);
            alert('Failed to sign up.');
          }
        } catch (err) {
          console.error('Error:', err);
          alert('Failed to sign up.');
        }
      } else {
        alert('Please fill out all fields.');
      }
    };
  
    if (signupForm) {
      signupForm.addEventListener('submit', signupFormHandler);
    }
  });
  