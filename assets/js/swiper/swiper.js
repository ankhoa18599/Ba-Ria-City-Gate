var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: true,
    keyboard: {
        enabled: true,
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        slideChangeTransitionStart: function () {
            $('.img-popup').hide(0);
            $('.img-popup').removeClass('aos-init').removeClass('aos-animate');
        },
        slideChangeTransitionEnd: function () {
            $('.img-popup').show(0);
            AOS.init();
        },
    }
});
$(".swiper-container").mouseenter(function () {
    swiper.autoplay.stop();
    
});
$(".swiper-container").mouseleave(function () {
    // swiper.autoplay.start();
});
$(document).ready(function () {
    $(".swiper-slide").hover(function () {

       
        $('.swiper-button-prev').removeClass('animate__animated animate__fadeOutRight');
        $('.swiper-button-prev').addClass('animate__animated animate__fadeInRight');

        $('.swiper-button-next').removeClass('animate__animated animate__fadeOutLeft');
        $('.swiper-button-next').addClass('animate__animated animate__fadeInLeft');

    }, function () {
        $('.swiper-button-prev').addClass('none-hidden');
        $('.swiper-button-next').addClass('none-hidden');
        $('.swiper-button-prev').removeClass('animate__animated animate__fadeInRight');
        $('.swiper-button-prev').addClass('animate__animated animate__fadeOutRight');
        
        
        $('.swiper-button-next').removeClass('animate__animated animate__fadeInLeft');
        $('.swiper-button-next').addClass('animate__animated animate__fadeOutLeft');

    });
});
