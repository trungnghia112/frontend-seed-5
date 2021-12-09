;(function () {
  'use strict'
  function roadmap() {
    var tl = new TimelineMax({ repeat: -1, repeatDelay: 0 })

    tl.from('.cloud', 1, { alpha: 0 })
      .to('.rocket-wrapper', 3, { y: -800, ease: Expo.easeIn })
      .to('.cloud', 3, { attr: { cy: 185 }, ease: Expo.easeIn }, '-=3')
      .set('.cloud', { clearProps: 'all' })
      .set('.rocket-wrapper', { y: 850 })
      .to('.rocket-wrapper', 4, {
        y: 0,
        ease: Elastic.easeOut.config(0.5, 0.4)
      })
      .to(
        '.trail-wrapper',
        2.5,
        { scaleX: 0.5, scaleY: 0, alpha: 0, ease: Expo.easeOut },
        '-=2.0'
      )
  }
  roadmap()
})()
