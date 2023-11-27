// Header color changing.
function HeaderColorChange() {
    const Header = document.querySelector("header");
    const HeaderElements = document.getElementsByClassName("color_change_elements");
    const HeaderSearchBox = document.querySelector(".search_button");
    const HeaderSVG = document.querySelector(".search_svg");
    var HeaderBottom = Header.getBoundingClientRect().bottom;
    
    const Work = document.querySelector(".works_section");
    var WorkTop = Work.getBoundingClientRect().top;
    var WorkBottom = Work.getBoundingClientRect().bottom;
    
    if(WorkTop < HeaderBottom) {
        Header.style.backgroundColor = "var(--color-white)";
        HeaderSVG.style.fill = "var(--color-black)";
        for(let i = 0; i < HeaderElements.length; i++) {
            HeaderElements[i].style.color = "var(--color-black)";
        };
        // Search Hover.    
        HeaderSearchBox.addEventListener("mouseenter", ()=> {
            HeaderSVG.style.fill = "var(--color-white)";
        });
    
        HeaderSearchBox.addEventListener("mouseleave", ()=> {
            HeaderSVG.style.fill = "var(--color-black)";
        });
    } if(WorkTop > HeaderBottom) {
        Header.style.backgroundColor = "var(--color-green-dark)";
        HeaderSVG.style.fill = "var(--color-white)";
        for(let i = 0; i < HeaderElements.length; i++) {
            HeaderElements[i].style.color = "var(--color-white)";
        };
        // Search Hover.        
        HeaderSearchBox.addEventListener("mouseenter", ()=> {
            HeaderSVG.style.fill = "var(--color-white)";
        });
    
        HeaderSearchBox.addEventListener("mouseleave", ()=> {
            HeaderSVG.style.fill = "var(--color-white)";
        });
    } if(WorkBottom < HeaderBottom) {
        Header.style.backgroundColor = "var(--color-green-dark)";
        HeaderSVG.style.fill = "var(--color-white)";
        for(let i = 0; i < HeaderElements.length; i++) {
            HeaderElements[i].style.color = "var(--color-white)";
        };
        // Search Hover.        
        HeaderSearchBox.addEventListener("mouseenter", ()=> {
            HeaderSVG.style.fill = "var(--color-white)";
        });
    
        HeaderSearchBox.addEventListener("mouseleave", ()=> {
            HeaderSVG.style.fill = "var(--color-white)";
        });
    };
};
window.addEventListener("scroll", HeaderColorChange)
