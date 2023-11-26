function HeaderColorChange() {
    const Header = document.querySelector("header");
    var HeaderBottom = Header.getBoundingClientRect().bottom;
    
    const Work = document.querySelector(".works_section");
    var WorkTop = Work.getBoundingClientRect().top;
    var WorkBottom = Work.getBoundingClientRect().bottom;
    
    if(WorkTop <= HeaderBottom) {
        Header.classList.add("header_color");
    } else {
        Header.classList.remove("header_color")
    };
};
window.addEventListener("scroll", HeaderColorChange)
