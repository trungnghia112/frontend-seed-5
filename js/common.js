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
    const animationsData = [
      {
        anchor: 'hero',
        items: [
          {
            selector: '.hero-content-cooperate',
            class: 'animate__animated animate__tada animate__repeat-2',
            delay: 0
          },
          {
            selector: '.button-col-android',
            class: 'animate__animated animate__backInLeft animate__delay-2s',
            delay: 0
          },
          {
            selector: '.button-col-ios',
            class: 'animate__animated animate__backInUp animate__delay-2s',
            delay: 0
          },
          {
            selector: '.button-col-web',
            class: 'animate__animated animate__backInRight animate__delay-2s',
            delay: 0
          }
        ]
      },
      {
        anchor: 'video-trailer',
        items: [
          {
            selector: '.is-animated',
            class: 'animate__animated animate__backInUp',
            delay: 0
          }
        ]
      },
      {
        anchor: 'about',
        items: [
          {
            selector: '.is-animated:nth-child(1)',
            class: 'animate__animated animate__fadeInUpBig',
            delay: 0.3
          },
          {
            selector: '.is-animated:nth-child(2)',
            class: 'animate__animated animate__fadeInUpBig',
            delay: 0.6
          },
          {
            selector: '.is-animated:nth-child(3)',
            class: 'animate__animated animate__fadeInUpBig',
            delay: 0.9
          }
        ]
      },
      {
        anchor: 'gamesystem',
        items: [
          {
            selector: '.is-animated:nth-child(1)',
            class: 'animate__animated animate__fadeInLeftBig',
            delay: 0
          },
          {
            selector: '.is-animated:nth-child(2)',
            class: 'animate__animated animate__fadeInRightBig',
            delay: 0
          }
        ]
      },
      {
        anchor: 'playtotrade',
        items: [
          {
            selector: '.is-animated',
            class: 'animate__animated animate__backInUp',
            delay: 0
          }
        ]
      },
      {
        anchor: 'tokenomics',
        items: [
          {
            selector: '.is-animated:nth-child(1)',
            class: 'animate__animated animate__fadeInLeftBig',
            delay: 0
          },
          {
            selector: '.is-animated:nth-child(2)',
            class: 'animate__animated animate__fadeInRightBig',
            delay: 0
          }
        ]
      },
      {
        anchor: 'tokenomics-2',
        items: [
          {
            selector: '.table-tokenomics-top.is-animated',
            class: 'animate__animated animate__backInDown',
            delay: 0
          },
          {
            selector: '.table-tokenomics-bottom.is-animated',
            class: 'animate__animated animate__backInUp',
            delay: 0
          }
        ]
      },
      {
        anchor: 'roadmap',
        items: [
          {
            selector:
              '.roadmap-update-timeline-list > li:nth-child(1) .is-animated',
            class: 'animate__animated animate__fadeInDown',
            delay: 0.2
          },
          {
            selector:
              '.roadmap-update-timeline-list > li:nth-child(2) .is-animated',
            class: 'animate__animated animate__fadeInDown',
            delay: 0.4
          },
          {
            selector:
              '.roadmap-update-timeline-list > li:nth-child(3) .is-animated',
            class: 'animate__animated animate__fadeInUp',
            delay: 0.6
          },
          {
            selector:
              '.roadmap-update-timeline-list > li:nth-child(4) .is-animated',
            class: 'animate__animated animate__fadeInDown',
            delay: 0.8
          },
          {
            selector:
              '.roadmap-update-timeline-list > li:nth-child(5) .is-animated',
            class: 'animate__animated animate__fadeInDown',
            delay: 1.0
          },
          {
            selector:
              '.roadmap-update-timeline-list > li:nth-child(6) .is-animated',
            class: 'animate__animated animate__fadeInDown',
            delay: 1.2
          }
        ]
      },
      {
        anchor: 'core-team',
        items: [
          {
            selector: '.is-animated',
            class: 'animate__animated animate__fadeInUp',
            delay: 0
          }
        ]
      },
      {
        anchor: 'advisors',
        items: [
          {
            selector: '.is-animated',
            class: 'animate__animated animate__fadeInUp',
            delay: 0
          }
        ]
      },
      {
        anchor: 'investors',
        items: [
          {
            selector: '.is-animated',
            class: 'animate__animated animate__fadeInUp',
            delay: 0
          }
        ]
      },
      {
        anchor: 'partners',
        items: [
          {
            selector: '.is-animated',
            class: 'animate__animated animate__fadeInUp',
            delay: 0
          }
        ]
      },
      {
        anchor: 'footer',
        items: [
          {
            selector: '.section-container .is-animated:nth-child(1)',
            class: 'animate__animated animate__fadeInLeftBig',
            delay: 0
          },
          {
            selector: '.section-container .is-animated:nth-child(2)',
            class: 'animate__animated animate__fadeInRightBig',
            delay: 0
          },
          {
            selector: '.footer .is-animated',
            class: 'animate__animated animate__fadeInUp',
            delay: 0
          }
        ]
      }
    ]
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
        'footer'
      ],
      navigation: true,
      navigationPosition: 'right',
      responsiveWidth: 991,
      afterResponsive: function(isResponsive) {
      },
      onLeave: function(origin, destination, direction) {
        // console.log(origin, destination, direction)

        const current = animationsData.find(
          v => v.anchor === destination.anchor
        )
        const prev = animationsData.find(v => v.anchor === origin.anchor)

        if (current && current.items) {
          current.items.map(el => {
            // console.log($('[data-anchor=' + destination.anchor + '] ' + el.selector))
            $('.section-' + destination.anchor + ' ' + el.selector)
              .addClass(el.class)
              .css('animation-delay', el.delay + 's')
          })
        }
        if (prev && prev.items) {
          prev.items.map(el => {
            $('.section-' + origin.anchor + ' ' + el.selector).removeClass(
              el.class
            )
          })
        }
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
