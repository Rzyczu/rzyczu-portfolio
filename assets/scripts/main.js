import { zoomFunction } from './zoom.js';
import { circleCarouselFunction } from './circlecarousel.js';
import { swiperFunction } from './swiper.js';
import { sendContactForm } from './contactForm.js';

zoomFunction();
circleCarouselFunction();
swiperFunction();

'use strict';


document.querySelectorAll(".navbar-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        if (document.getElementById('offcanvasDarkNavbar').classList.contains('show')) {
            var offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasDarkNavbar'));
            console.log(offcanvas)
            offcanvas.hide();
        }
    });
});


