(function () {
  // switch btn 

  const switches = document.querySelectorAll('.switch-btn')

  switches.forEach(function (switchItem) {
    switchItem.addEventListener('click', function () {
      switchItem.classList.toggle('switch-on')
    })
  })


  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 220,
    // autoHeight: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    // If we need pagination

    // Navigation arrows
    navigation: {
      prevEl: '.office-news-nav__left',
      nextEl: '.office-news-nav__right',
    },

    // And if we need scrollbar

  })
}());