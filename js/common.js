/*!--------------------------------------------------------------------------------

 Theme Name: Frontend Seed 4
 Author:     trungnghia112 <trungnghia112@gmail.com>

 -----------------------------------------------------------------------------------*/
(function() {
  'use strict'

  // var breakpointMobileSize = 991

  function slider() {
    $('.js-slider-items').slick({
      // infinite: false
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

  function fullPageInit() {
    var myFullpage = new fullpage('#fullpage', {
      licenseKey: '6B52CCE3-E8074605-B3EE5753-8E09C9E5',
      responsiveSlides: true,
      responsiveSlidesKey: '6B52CCE3-E8074605-B3EE5753-8E09C9E5',
      anchors: [
        'hero',
        'video-trailer',
        'about',
        'gamesystem',
        'playtotrade',
        'tokenomics',
        'tokenomics-2',
        'roadmap',
        'core-team',
        'advisors',
        'investors',
        'partners',
        'footer',
      ],
      navigation: true,
      navigationPosition: 'right',
      responsiveWidth: 991,
      afterResponsive: function(isResponsive) {

      }
    })
  }

  function init() {
    fullPageInit()
    slider()
    carousel()
  }

  init()

})()
