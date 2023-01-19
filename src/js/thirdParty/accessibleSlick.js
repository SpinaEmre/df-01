'use strict';

require('@accessible360/accessible-slick');

const selectors = {
    carousel: '[data-slick]'
};

// default options
const options = {
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                dots: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

module.exports = {
    /**
     * Initializes carousels via the data-slick attribute,
     */
    init: () => {
        if ('undefined' === $ || 'undefined' === $.fn.slick) {
            return;
        }

        console.log('assigning slicks');
        $(selectors.carousel).each((i, elem) => {
            $(elem).slick(options);
        });
    },

    attachEvents: () => {

        // Example: Adding listener to tab change to 'refresh' hidden slick
        $(document).on('shown.bs.tab', function(e, eventInfo) {
            $('.tab-pane [data-slick]').slick('refresh');
        });
    }
};