document.getElementById('login-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  console.log('Email:', email);
  console.log('Password:', password);

  if (email && password) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        const errorMessage = await response.json();
        console.error('Server Error Response:', errorMessage);
        alert('Failed to log in.');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      alert('Failed to log in.');
    }
  } else {
    alert('Please enter both email and password.');
  }
});
