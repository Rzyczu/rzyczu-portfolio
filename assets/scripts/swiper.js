const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});