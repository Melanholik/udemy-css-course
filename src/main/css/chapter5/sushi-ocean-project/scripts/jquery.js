$(document).ready(function () {
    new Waypoint({
        element: document.getElementById('restaurant-description'),
        handler: function (direction) {
            if (direction === "down") {
                $('nav').attr('id', "sticky-nav");
            } else {
                $('nav').removeAttr('id');
            }
        },
        offset: 60
    });
})


