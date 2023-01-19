window.jQuery = window.$ = require('jquery');
const slickModule = require('@accessible360/accessible-slick');
const selectors = {
    carousel: '[data-slick]'
};

// default options
const options = {
    slidesToShow: 2.3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: false,
    variableWidth: true,
    centerMode: false,
    prevArrow:"<span class='slick-custom-arrow slick-prev'></span>",
    nextArrow:"<span class='slick-custom-arrow slick-next'></span>",
    responsive: [
        {
            breakpoint: 480,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 1.3,
                slidesToScroll: 1
            }
        }
    ]
}

document.addEventListener('DOMContentLoaded', () => {
    $(selectors.carousel).each((i, elem) => {
        $(elem).slick(options);
    });
 });

require('./src/js/thirdParty/bootstrap');
require('./src/js/thirdParty/accessibility-slick');
