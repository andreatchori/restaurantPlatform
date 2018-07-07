/*global $, window, document, setTimeout, WOW*/
$(document).ready(function () {
    'use strict';
    let preloader           = $('.preloader'), // not used yet
        navbarToggleBtn     = $('.navbar .navbar-toggler'),
        navbar              = $('.navbar'), // not used yet
        inputMaterial       = $('.input-material'),
        currentScrollTop    = 0, // not used yet
        c                   = 0; // not used yet

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
    // Transition Placeholders
    // ------------------------------------------------------ //
    inputMaterial.on('focus', function () {
        $(this).siblings('label').addClass('active');
        $(this).parents('.time_pick').siblings('label').addClass('active');
    });

    inputMaterial.on('blur', function () {
        $(this).siblings('label').removeClass('active');

        if ($(this).val() !== '') {
            $(this).siblings('label').addClass('active');
        } else {
            $(this).siblings('label').removeClass('active');
        }
    });


      // ------------------------------------------------------- //
    // Add Text Background from HTML [data-text] attribute
    // ------------------------------------------------------- //
    $('.has-background-text').each(function () {
        $('<span class="text-bg"></span>').prependTo(this);
        var textBackground = $(this).attr('data-text');
        $(this).find('.text-bg').text(textBackground);
    });

    $('.has-background-text-gray').each(function () {
        $('<span class="text-bg-gray"></span>').prependTo(this);
        let textBackground = $(this).attr('data-text');
        $(this).find('.text-bg-gray').text(textBackground);
    });
    // ------------------------------------------------------- //
    // Navbar Toggler Button
    // ------------------------------------------------------- //
    navbarToggleBtn.on('click', function () {
        $(this).toggleClass('active');
    });


 // ---------------------------------------------- //
    // Redirection script
    // ---------------------------------------------- //
    $("#reservation").click(function(){
        window.location.href = "reservation.html";
    });

     // ---------------------------------------------- //
    // Date picker initialization
    // ---------------------------------------------- //
    $('#date').datepicker({
        todayButton: new Date()
    });
    // ---------------------------------------------- //
   // Time picker initialization
  // ---------------------------------------------- //
    $('.timepicker').timepicki();
});