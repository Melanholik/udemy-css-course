$(document).ready(function () {
    //sticky-nav
    new Waypoint({
        element: document.getElementById('restaurant-description'),
        handler: function (direction) {
            if (direction === 'down') {
                $('nav').attr('id', 'sticky-nav');
            } else {
                $('nav').removeAttr('id');
            }
        },
        offset: 60
    });

    //buttons and nav links click
    $(".button-order").click(function () {
        $("html, body").animate({scrollTop: $("#how-to-order").offset().top}, 800);
    });

    $(".button-menu").click(function () {
        $("html, body").animate({scrollTop: $("#restaurant-description").offset().top}, 800);
    });

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                &&
                location.hostname === this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });

    //animation
    new Waypoint({
        element: document.getElementById('restaurant-description'),
        handler: function () {
            $(".animation-spawn").addClass(("animate__animated animate__fadeIn"))
        },
        offset: 500
    });

    new Waypoint({
        element: document.getElementById('cities-section'),
        handler: function () {
            $(".animation-fadeInRight").addClass(("animate__animated animate__fadeInRight"))
        },
        offset: 400
    });

    new Waypoint({
        element: document.getElementById('how-to-order'),
        handler: function () {
            $(".animation-fadeInUp").addClass(("animate__animated animate__fadeInUp"))
        },
        offset: 500
    });

    new Waypoint({
        element: document.getElementById('header'),
        handler: function (direction) {
            if (direction === 'up') {
                $(".animation-heartBeat").addClass(("animate__animated animate__heartBeat"));
            } else {
                $(".animation-heartBeat").removeClass("animate__animated animate__heartBeat")
            }
        },
        offset: -500
    });

    $(".mobile-nav-icon ion-icon").click(function () {

        let icon = $(".mobile-nav-icon ion-icon");

        if (icon.attr("name") === "menu-outline") {
            icon.attr("name", "close-outline");
            $("nav").animate({height: "230px"}, 400);
        } else {
            icon.attr("name", "menu-outline");
            $("nav").animate({height: "70px"}, 400);
        }
        $("#main-ul-nav").slideToggle(500);

    });

})


