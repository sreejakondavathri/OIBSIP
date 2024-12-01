if (!sessionStorage.getItem('authenticated')) {
    alert("Access denied! Please log in.");
    window.location.href = "index.html";
}

const navLinks = document.querySelector('.nav-links');
const homeButton = navLinks.querySelector('a[href="index.html"]');
if (homeButton) {
    navLinks.removeChild(homeButton); 
}

document.getElementById('logout').addEventListener('click', () => {
    sessionStorage.removeItem('authenticated');
    window.location.href = "index.html";
});