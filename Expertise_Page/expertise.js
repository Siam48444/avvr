// Hamburger menu.
const Hamburger = document.querySelector(".hamburger");
const Menu = document.querySelector(".menu");

Hamburger.addEventListener("click", ()=> {
    Menu.style.display = "flex";
});

Menu.addEventListener("click", ()=> {
    Menu.style.display = "none";
});