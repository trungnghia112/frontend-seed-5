/*!--------------------------------------------------------------------------------

 Theme Name: Frontend Seed 4
 Author:     trungnghia112 <trungnghia112@gmail.com>

 -----------------------------------------------------------------------------------*/
(function() {
  'use strict'

  // var breakpointMobileSize = 991

  function slider() {
    $('.js-slider-items').slick({
      infinite: false
    })
  }

  function carousel() {
    $('.js-carousel-items').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 1025,
          settings: {
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })
  }

  function init() {
    slider()
    carousel()
  }

  init()

})()
