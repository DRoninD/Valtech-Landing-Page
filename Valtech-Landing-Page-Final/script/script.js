// DOM elements
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];


// Navbar hamburger menu function
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// Smooth scroling function
document.querySelector('main').scrollIntoView({
  behavior: 'smooth'
});