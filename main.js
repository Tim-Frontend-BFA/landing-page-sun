$(document).ready(function(){
    $('.carousel1').owlCarousel({
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        slideBy: 5,
        items:1,
        margin:80,
        autoplay: true,
        loop: true,
        responsive:{
            0 : {
                items: 1
            },
            424: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    });
});
$(document).ready(function(){
    $('.carousel2').owlCarousel({
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        slideBy: 3,
        items:1,
        margin:80,
        loop: true,
        responsive:{
            0 : {
                items: 1
            },
            768: {
                items: 3
            },
            1080: {
                items: 4
            }
        }
    });
});