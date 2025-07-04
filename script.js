$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    if (document.querySelector(".typing")) {
        new Typed(".typing", {
            strings: ["Développeuse Web", "Experte en méthode Agile", "Administratrice réseau en devenir"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    if (document.querySelector(".typing-2")) {
        new Typed(".typing-2", {
            strings: ["Développeuse Web", "Experte en méthode Agile", "Administratrice réseau en devenir"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }


    // owl carousel script
    $('.carousel').owlCarousel({
        strings: ["Developpeuse Web", "Experte en méthode Agile", "Administratrice réseau en devenir"],
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    $('.toggle-btn').click(function () {
        var content = $(this).siblings('.project-content');
        var isVisible = content.is(':visible');
        content.slideToggle(200);
        $(this).text(isVisible ? 'Voir plus' : 'Voir moins');
    });

});