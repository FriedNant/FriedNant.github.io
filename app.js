document.getElementById('password-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const password = document.getElementById('password').value;
    const response = document.getElementById('response');
  
    try {
      const passwordsFile = await fetch('passwords.json');
      const passwords = await passwordsFile.json();
  
      if (passwords.includes(password)) {
        // Redirect to the next page
        window.location.href = 'http://httpforever.com/';
      } else {
        // Incorrect password
        response.textContent = 'Mot de passe incorrect.';
        response.style.color = 'red';
        response.style.display = 'block';
      }
    } catch (error) {
      // Handle errors
      response.textContent = 'Une erreur est survenue :(';
      response.style.color = 'red';
      response.style.display = 'block';
    }
  });