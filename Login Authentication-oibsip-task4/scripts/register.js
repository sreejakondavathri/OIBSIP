document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');

    if (localStorage.getItem(username)) {
        error.textContent = "Username already exists!";
        return;
    }

    localStorage.setItem(username, JSON.stringify({ password }));
    alert("Registration successful! Please login.");
    window.location.href = "index.html";
});
