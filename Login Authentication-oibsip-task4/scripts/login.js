document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');

    const user = localStorage.getItem(username);
    if (!user) {
        error.textContent = "Invalid username!";
        return;
    }

    const userData = JSON.parse(user);
    if (userData.password !== password) {
        error.textContent = "Incorrect password!";
        return;
    }

    sessionStorage.setItem('authenticated', 'true');
    window.location.href = "secure.html";
});
