
window.addEventListener('DOMContentLoaded', event => {
    setSectionVisibility(0);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    showSmallNav = function (show)
    {
        document.getElementById("navBarListSmall").style['display']  = show ? 'flex' : 'none';
    };

    
    function setSectionVisibility(visibleIndex) {
        // Define all section IDs
        const sectionIds = [
            'homeSection', 'aboutSection', 'servicesSection',
            'contactSection', 'resourceSection', 'bookSection'
        ];
    
        // Hide all sections
        sectionIds.forEach((sectionId, index) => {
            document.getElementById(sectionId).style.display = (index === visibleIndex) ? 'flex' : 'none';
        });
    }
    
    // Main menu
    document.getElementById("home-menu-item").onclick = () => setSectionVisibility(0);
    document.getElementById("about-menu-item").onclick = () => setSectionVisibility(1);
    /*document.getElementById("services-menu-item").onclick = () => setSectionVisibility(2);*/
    document.getElementById("contact-menu-item").onclick = () => setSectionVisibility(3);
    document.getElementById("resources-menu-item").onclick = () => setSectionVisibility(4);
    document.getElementById("book-menu-item").onclick = () => setSectionVisibility(5);
    
    // Small menu
    document.getElementById("home-menu-item-sm").onclick = () => setSectionVisibility(0);
    document.getElementById("about-menu-item-sm").onclick = () => setSectionVisibility(1);
    /*document.getElementById("services-menu-item-sm").onclick = () => setSectionVisibility(2);*/
    document.getElementById("contact-menu-item-sm").onclick = () => setSectionVisibility(3);
    document.getElementById("resources-menu-item-sm").onclick = () => setSectionVisibility(4);
    document.getElementById("book-menu-item-sm").onclick = () => setSectionVisibility(5);
    
    var acc = document.getElementsByClassName("contact-accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        
        acc[i].addEventListener("click", function() {
        
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;

            if (panel.style.display === "flex") {
                panel.style.display = "none";
            } else {
                panel.style.display = "flex";
            }
        });
    }
});
