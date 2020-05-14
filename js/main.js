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


  if (window.innerWidth <= 1300) {
    var packegesSwiper = new Swiper('.packeges-wrap ', {
      direction: 'horizontal',
      speed: 220,
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
      },
      updateOnWindowResize: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 500px
        500: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 500px
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        },
      }

    })

  }

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

    document.addEventListener('click', function (event) {
      if (event.target.className == 'modal-wrap') {
        modal.style.display = 'none';
      };
    })
  }

  // FAQ 
  var faqItems = document.querySelectorAll('.faq-item')

  if (faqItems) {
    faqItems.forEach(function (item) {
      item.addEventListener('click', function () {
        item.classList.toggle('active')
      })
    })
  }

  // Уведомления 
  var notifies = document.querySelectorAll('.notify-item')
  if (notifies) {
    notifies.forEach(function (notify) {
      notify.querySelector('.notify-item__close').addEventListener('click', function () {
        notify.classList.add('closing')
        setTimeout(function () {
          notify.classList.remove('closing')
          notify.style.display = 'none'
        }, 1000);
      })
    })
  }

  // click on Password 

  var passwordBlocks = document.querySelectorAll('.password-block')
  if (passwordBlocks) {

    passwordBlocks.forEach(function (item) {
      item.querySelector('img').addEventListener('click', function () {
        var icon = item.querySelector('img')
        if (icon.getAttribute('src') == 'img/sign/show-password-icon.svg') {
          icon.setAttribute('src', 'img/sign/hide-password-icon.svg')
        } else {
          icon.setAttribute('src', 'img/sign/show-password-icon.svg')
        }
        icon.classList.toggle('hide')

        var input = item.querySelector('input')
        if (input.getAttribute('type') == 'password') {
          input.setAttribute('type', 'text')
        } else {
          input.setAttribute('type', 'password')

        }
      })
    })

  }
}());