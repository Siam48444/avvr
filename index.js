// Header color changing.
function HeaderColorChange() {
    const Header = document.querySelector("header");
    const HeaderElements = document.getElementsByClassName("color_change_elements");
    var HeaderBottom = Header.getBoundingClientRect().bottom;
    
    const Characteristics = document.querySelector(".characteristics");
    var CharacteristicsBottom = Characteristics.getBoundingClientRect().bottom;

    const OverviewSection = document.querySelector(".overview_section");
    var OverviewSectionTop = OverviewSection.getBoundingClientRect().top;
    
    if(CharacteristicsBottom < HeaderBottom) {
        Header.style.backgroundColor = "var(--color-white)";
        for(let i = 0; i < HeaderElements.length; i++) {
            HeaderElements[i].style.color = "var(--color-black)";
        };
    } if(CharacteristicsBottom > HeaderBottom) {
        Header.style.backgroundColor = "var(--color-green-dark)";
        for(let i = 0; i < HeaderElements.length; i++) {
            HeaderElements[i].style.color = "var(--color-white)";
        };
    } if(OverviewSectionTop < HeaderBottom) {
        Header.style.backgroundColor = "var(--color-green-dark)";
        for(let i = 0; i < HeaderElements.length; i++) {
            HeaderElements[i].style.color = "var(--color-white)";
        };
    };
};
window.addEventListener("scroll", HeaderColorChange)




// Hamburger menu.
const Hamburger = document.querySelector(".hamburger");
const Menu = document.querySelector(".menu");

Hamburger.addEventListener("click", ()=> {
    Menu.style.display = "flex";
});

Menu.addEventListener("click", ()=> {
    Menu.style.display = "none";
});
