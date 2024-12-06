
window.addEventListener('DOMContentLoaded', event => {
    setSectionVisibility(!0, !1, !1, !1, !1, !1);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    showSmallNav = function (show)
    {
        document.getElementById("navBarListSmall").style['display']  = show ? 'flex' : 'none';
    };

    
    function setSectionVisibility(home, about, services, contact, resource) {
        document.getElementById('homeSection').style.display = home ? "flex" : "none";
        document.getElementById('aboutSection').style.display = about ? "flex" : "none";
        document.getElementById('servicesSection').style.display = services ? "flex" : "none";
        document.getElementById('contactSection').style.display = contact ? "flex" : "none";
        document.getElementById('resourceSection').style.display = resource ? "flex" : "none";

        //scrollToTop();
    };


    /* Main menu */
    document.getElementById("home-menu-item").onclick = function () {
        setSectionVisibility(!0, !1, !1, !1, !1, !1);
    };

    document.getElementById("about-menu-item").onclick = function () {
        setSectionVisibility(!1, !0, !1, !1, !1);
    };

    document.getElementById("services-menu-item").onclick = function () {
        setSectionVisibility(!1, !1, !0, !1, !1);
    };

    document.getElementById("contact-menu-item").onclick = function () {
        setSectionVisibility(!1, !1, !1, !0, !1);
    };

    document.getElementById("resources-menu-item").onclick = function () {
        setSectionVisibility(!1, !1, !1, !1, !0);
    };

    /* Small menu */
    document.getElementById("home-menu-item-sm").onclick = function () {
        setSectionVisibility(!0, !1, !1, !1, !1, !1);
    };

    document.getElementById("about-menu-item-sm").onclick = function () {
        setSectionVisibility(!1, !0, !1, !1, !1);
    };

    document.getElementById("services-menu-item-sm").onclick = function () {
        setSectionVisibility(!1, !1, !0, !1, !1);
    };

    document.getElementById("contact-menu-item-sm").onclick = function () {
        setSectionVisibility(!1, !1, !1, !0, !1);
    };

    document.getElementById("resources-menu-item-sm").onclick = function () {
        setSectionVisibility(!1, !1, !1, !1, !0);
    };


});
