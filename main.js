// Initialize ScrollReveal
const sr = ScrollReveal();

// Selectors
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Event listener for menu button
menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute('class', isOpen ? "ri-close-line" : "ri-menu-line");
});

// Event listener for nav links
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute('class', 'ri-menu-line');
});

// ScrollReveal options
const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// ScrollReveal for header__image img
sr.reveal(".header__image img", {
    ...scrollRevealOptions,
    origin: "right",
});

// ScrollReveal for header__content h2
sr.reveal(".header__content h2", {
    ...scrollRevealOptions,
    delay: 500,
});

// ScrollReveal for header__content h1
sr.reveal(".header__content h1", {
    ...scrollRevealOptions,
    delay: 1000,
});
sr.reveal(".order__card", {
    ...scrollRevealOptions,
    interval: 500,
});

sr.reveal(".event__content", {
    ...scrollRevealOptions,
    duration: 1000,
});

