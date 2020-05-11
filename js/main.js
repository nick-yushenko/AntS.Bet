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

  if (switches) {
    switches.forEach(function (switchItem) {
      switchItem.addEventListener('click', function () {
        switchItem.classList.toggle('switch-on')
      })
    })
  }


  // var packegesSwiper = new Swiper('.packeges-wrap', {
  //   direction: 'horizontal',
  //   speed: 220,
  //   slidesPerView: 3,
  // })

  function initSwiper() {
    var newsSwiper = new Swiper('.office-news-container', {
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



  // payment 

  var paymentBtns = document.querySelectorAll('.payment-buttons__item')

  if (paymentBtns) {
    paymentBtns.forEach(function (item) {
      item.addEventListener('click', function () {
        paymentBtns.forEach(function (item) {
          item.classList.remove('btn-primary')
        })
        item.classList.add('btn-primary')
      })
    })
  }

  var modal = document.querySelector('.modal-wrap')
  var uiAdd = document.querySelectorAll('.path-item__logo.empty')

  if (uiAdd) {
    uiAdd.forEach(function (item) {
      item.addEventListener('click', function () {
        modal.style.display = 'flex'
      })
    })

    modal.addEventListener('click', function () {
      modal.style.display = 'none'
    })
    // modal.querySelector('.modal').addEventListener('click', function () {
    //   modal.style.display = 'flex'
    // })
  }

}());