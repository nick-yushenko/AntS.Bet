(function () {
  // switch btn 

  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }


  var switches = document.querySelectorAll('.switch-btn')

  switches.forEach(function (switchItem) {
    switchItem.addEventListener('click', function () {
      switchItem.classList.toggle('switch-on')
    })
  })




  var mySwiper
  var mySwiperContainer = document.querySelector('.office-news-container')
  var mySwiperWrapper = document.querySelector('.office-news__slider')
  var myNewsBlock = document.querySelectorAll('.office-news-item')

  function initSwiper() {
    mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      speed: 220,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        prevEl: '.office-news-nav__left',
        nextEl: '.office-news-nav__right',
      },
    })
  }

  initSwiper()

  window.addEventListener('resize', function (e) {
    initSwiper()
  }, false);



}());