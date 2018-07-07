/*global $, window, document, setTimeout, WOW*/
$(document).ready(function () {
    'use strict';
    let preloader           = $('.preloader'),
        navbarToggleBtn     = $('.navbar .navbar-toggler'),
        navbar              = $('.navbar'),
        currentScrollTop    = 0,
        c                   = 0;

    // ---------------------------------------------- //
    // Animsition
    // ---------------------------------------------- //
    $(".animsition").animsition({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 500,
        outDuration: 500,
        linkElement: ".animsition-link",
        loading: false,
        loadingParentElement: "body",
        loadingClass: "animsition-loading",
        loadingInner: "",
        timeout: false,
        timeoutCountdown: 5e3,
        onLoadEvent: true,
        browser: ["animation-duration", "-webkit-animation-duration"],
        overlay: false,
        overlayClass: "animsition-overlay-slide",
        overlayParentElement: "body",
        transition: function (o) {
            window.location.href = o;
        }
    });


    // ------------------------------------------------------- //
    // Navbar Toggler Button
    // ------------------------------------------------------- //
    navbarToggleBtn.on('click', function () {
        $(this).toggleClass('active');
    });
});
