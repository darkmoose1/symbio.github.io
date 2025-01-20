
window.addEventListener('DOMContentLoaded', event => {
    setSectionVisibility(0);

    // Main menu
    document.getElementById("home-menu-item").onclick = () => setSectionVisibility(0);
    document.getElementById("about-menu-item").onclick = () => setSectionVisibility(1);
    document.getElementById("services-menu-item-consult").onclick = () => setSectionVisibility(2);
    document.getElementById("services-menu-item-anti-wrinkle-treatment").onclick = () => setSectionVisibility(3);
    document.getElementById("services-menu-item-dermal-filler").onclick = () => setSectionVisibility(4);
    document.getElementById("services-menu-item-bio-remodelling").onclick = () => setSectionVisibility(5);
    document.getElementById("services-menu-item-sweat-reduction").onclick = () => setSectionVisibility(6);
    document.getElementById("services-menu-item-followup").onclick = () => setSectionVisibility(7);
    document.getElementById("contact-menu-item").onclick = () => setSectionVisibility(8);
    document.getElementById("resources-menu-item").onclick = () => setSectionVisibility(9);
    document.getElementById("book-menu-item").onclick = () => setSectionVisibility(10);

    // Small menu
    document.getElementById("home-menu-item-sm").onclick = () => setSectionVisibility(0);
    document.getElementById("about-menu-item-sm").onclick = () => setSectionVisibility(1);
    document.getElementById("services-menu-item-consult-sm").onclick = () => setSectionVisibility(2);
    document.getElementById("services-menu-item-anti-wrinkle-treatment-sm").onclick = () => setSectionVisibility(3);
    document.getElementById("services-menu-item-dermal-filler-sm").onclick = () => setSectionVisibility(4);
    document.getElementById("services-menu-item-bio-remodelling-sm").onclick = () => setSectionVisibility(5);
    document.getElementById("services-menu-item-sweat-reduction-sm").onclick = () => setSectionVisibility(6);
    document.getElementById("services-menu-item-followup-sm").onclick = () => setSectionVisibility(7);
    document.getElementById("contact-menu-item-sm").onclick = () => setSectionVisibility(8);
    document.getElementById("resources-menu-item-sm").onclick = () => setSectionVisibility(9);
    document.getElementById("book-menu-item-sm").onclick = () => setSectionVisibility(10);
    
    // Assign event handler to nav items when clicked to dismiss the menu
    const navItems = document.getElementsByClassName("nav-items-list-item");
    for (i = 0; i < navItems.length; i++) {
        navItems[i].onclick = () => showNav(false);
    };

    // Assign event handler to small nav items when clicked to dismiss the menu
    const navItemsSm = document.getElementsByClassName("nav-items-list-item-sm");
    for (i = 0; i < navItemsSm.length; i++) {
        navItemsSm[i].onclick = () => showSmallNav(false);
    };

    const acc = document.getElementsByClassName("contact-accordion");
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

    const disclaimerLinks = document.getElementsByClassName("disclaimer");

    for (i = 0; i < disclaimerLinks.length; i++) {
        disclaimerLinks[i].onclick = () => setSectionVisibility(11);
    };
});

scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

showSmallNav = function (show) {
    document.getElementById("nav-items-list-container-sm-id").style['display'] = show ? 'flex' : 'none';

    // Toggle up / down arrow
    const btn = document.getElementById("nav-menu-button-sm-id");

    if(show) {
        btn.innerHTML = '\u25B2';
    } else {
        btn.innerHTML = '\u25BC';
    }
};

showSmallServicesNav = function (show) {
    document.getElementById("services-menu-dropdown-container-sm-id").style['display'] = show ? 'flex' : 'none';
}

showNav = function (show) {
    document.getElementById("services-menu-dropdown-container-id").style['display'] = show ? 'flex' : 'none';
};

function setSectionVisibility(visibleIndex) {
    // Define all section IDs
    const sectionIds = [
        'homeSection',
        'aboutSection',
        'servicesConsultationSection',
        'servicesAntiWrinkleSection',
        'servicesDermalFillerSection',
        'servicesBioRemodellingSection',
        'servicesSweatReductionSection',
        'servicesFollowUpSection',
        'contactSection',
        'resourceSection',
        'bookSection',
        'disclaimerSection'
    ];

    const menuIds = [
        'menuItem0',
        'menuItem1',
        'menuItem2',
        'menuItem3',
        'menuItem4',
        'menuItem5'
    ];

    // Hide all sections
    sectionIds.forEach((sectionId, index) => {
        document.getElementById(sectionId).style.display = (index === visibleIndex) ? 'flex' : 'none';
    });

    var menuItem = visibleIndex;
    
    if(menuItem == 2 || menuItem == 3 || menuItem == 4 ||  menuItem == 5 || menuItem == 6 || menuItem == 7) {
        menuItem = 2;
    }

    if(menuItem > 7) {
        menuItem = menuItem - 5;
    }

    // Set active menu item
    menuIds.forEach((sectionId, index) => {
        if(index == menuItem){
            document.getElementById(menuIds[index]).classList.add('nav-item-list-active');
        } else {
            document.getElementById(menuIds[index]).classList.remove('nav-item-list-active');
        }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
};
