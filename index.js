// Header color changing.
function HeaderColorChange() {
    const Header = document.querySelector("header");
    const HeaderElements = document.getElementsByClassName("color_change_elements");
    var HeaderBottom = Header.getBoundingClientRect().bottom;
    
    const Work = document.querySelector(".works_section");
    var WorkTop = Work.getBoundingClientRect().top;
    var WorkBottom = Work.getBoundingClientRect().bottom;
    
    if(WorkTop < HeaderBottom) {
        Header.style.backgroundColor = "var(--color-white)";
        for(let i = 0; i < HeaderElements.length; i++) {
            HeaderElements[i].style.color = "var(--color-black)";
        };
    } if(WorkTop > HeaderBottom) {
        Header.style.backgroundColor = "var(--color-green-dark)";
        for(let i = 0; i < HeaderElements.length; i++) {
            HeaderElements[i].style.color = "var(--color-white)";
        };
    } if(WorkBottom < HeaderBottom) {
        Header.style.backgroundColor = "var(--color-green-dark)";
        for(let i = 0; i < HeaderElements.length; i++) {
            HeaderElements[i].style.color = "var(--color-white)";
        };
    };
};
window.addEventListener("scroll", HeaderColorChange);
