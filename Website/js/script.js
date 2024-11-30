window.addEventListener('DOMContentLoaded', event => {

    setSectionVisibility(!0, !1, !1, !1);
    
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    
    /*
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };
    */

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    function setSectionVisibility(home, about, services, contact) {
        document.getElementById('homeSection').style.display = home ? "block" : "none";
        document.getElementById('aboutSection').style.display = about ? "block" : "none";
        document.getElementById('servicesSection').style.display = services ? "block" : "none";
        document.getElementById('contactSection').style.display = contact ? "block" : "none";
        scrollToTop();
    };

    document.getElementById("home").onclick = function () {
        setSectionVisibility(!0, !1, !1, !1);
    };

    document.getElementById("about").onclick = function () {
        setSectionVisibility(!1, !0, !1, !1);
    };

    document.getElementById("services").onclick = function () {
        setSectionVisibility(!1, !1, !0, !1);
    };

    document.getElementById("contact").onclick = function () {
        setSectionVisibility(!1, !1, !1, !0);
    };
    
    showSmallNav = function (show)
    {
        document.getElementById("navbarResponsive").style['display']  = show ? 'block' : 'none';
    };

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
});
