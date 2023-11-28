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


// Custom mouse cursor.
function TrackCursor(e) {
    const CustomCursor = document.querySelector(".cursor");
    var w = CustomCursor.clientWidth;
    var h = CustomCursor.clientHeight;

    document.addEventListener("mouseenter", ()=> {
        CustomCursor.style.display = "block";
    });

    document.addEventListener("mouseleave", ()=> {
        CustomCursor.style.display = "none";
    });

    CustomCursor.style.transform = `translate(${e.clientX - w / 2}px, ${e.clientY - h / 2}px)`


    

    console.log();
};
window.addEventListener("mousemove", TrackCursor);
