//Sticky Header 
var topBarHeight = $(".top-bar").innerHeight();
$(window).scroll(function () {
    "use strict";
    if ($(window).scrollTop() >= topBarHeight) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }
});

$(document).ready(function () {
    "use strict";
    if ($(window).scrollTop() >= topBarHeight) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }
});
//Show Nav IN Mobile
$(document).ready(function () {
    "use strict";
    var clicked = false;

    $(".show-menu-btn").click(function () {
        var $this = $(this);
        if (!clicked) {
            clicked  = true;
            $(this).children(".humburger").toggleClass("active");
            $(".menu").toggleClass("active");
            setTimeout(function () {
                clicked = false;
            }, 500);
        }
    });
});
//Close Active Menu
$(document).click(function () {
    if ($(".menu").hasClass("active")) {
        $(".show-menu-btn").click();
    } 
})
$(".menu,.show-menu-btn").click(function (e) {
    "use strict";
    e.stopPropagation();
});
//Close Active Menu on click
$(document).ready(function () {

    $(".menu li").click(function () {

        $(".show-menu-btn").click();
    });
});

//Show Appointment Date
var dateShow = $(".calendar").children('#dateShow'),
    dateInput = $('.calendar').children('#dateInput');
$(document).ready(function (){
    "use strict";
    dateInput.change(function (){
        dateShow.attr("placeholder", dateInput.val());
    })
});

//Team Owl Carousel
$(".team-slider").owlCarousel({
    rtl:true,  /*direction By Default  :: False*/
    margin:20,
    loop:false,    /*make the slides in loop with a default False*/
    dots:true,     /*the dots buttons with a default True*/
    //nav:true,     /*the arrow buttons with a default False*/ 
    autoplay:true,  /*auto play for Slides with a default False*/
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            //loop:false
        },
        768:{
            items:2,
            //loop:true
        },
        992:{
            items:3
        }
    }
});


//testimonials owl carousel
$(".owl-carousel").owlCarousel({
    rtl:true,  /*direction By Default :: False*/
    margin:20,
    loop:false,    /*make the slides in loop with a default False*/
    dots:true,     /*the dots buttons with a default True*/
    //nav:true,     /*the arrow buttons with a default False*/ 
    autoplay:true,  /*auto play for Slides with a default False*/
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            //loop:false
        },
        768:{
            items:2,
            //loop:true
        }/*,
        992:{
            items:3
        }*/
    }
});

