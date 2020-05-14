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


  // structure ui in mobile 
  var isDrop = false
  var logo = document.querySelectorAll('.path-item__logo')

  if (window.innerWidth <= 575) {
    if (logo) {
      logo.forEach(function (item) {
        item.addEventListener('click', function () {

          logo.forEach(function (item) {
            item.parentNode.style.zIndex = '1'

          })
          item.parentNode.style.zIndex = '3'
          setTimeout(() => {
            if (!isDrop) {
              item.querySelector('.drop').style.display = 'block'
              isDrop = true
            } 
          }, 180);
        })
      })
    }
  }
  // if (window.innerWidth <= 575) {
  //   var uiLines = document.querySelectorAll('.path-line')
  //   if (uiLines)
  //     uiLines.forEach(function (line) {
  //       var uiItems = line.querySelectorAll('.path-item')
  //       uiItems.forEach(function (item) {
  //         var logo = item.querySelector('.path-item__logo')
  //         logo.addEventListener('click', function () {
  //           var drop = logo.querySelector('.drop')
  //           if (drop.classList.contains('right')) {
  //             for (var i = uiItems.length; i > 0; i--) {
  //               uiItems[i - 1].style.zIndex = uiItems.length - i + 1 + ''
  //               console.log('+')
  //             }
  //           }
  //           if (drop.classList.contains('left')) {
  //             for (var i = 0; i < uiItems.length; i++) {
  //               uiItems[i].style.zIndex = i + 1 + ''
  //               console.log('+')

  //             }
  //           }
  //         })
  //       })
  //     })
  // }

  // modal

  var modal = document.querySelector('.modal-wrap')
  var uiAdd = document.querySelectorAll('.path-item__logo.empty')
  var modalCopy = document.querySelector('.modal-btn')

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
      if (document.querySelectorAll('.drop'))
        if (window.innerWidth <= 575)
          if (isDrop)
            if (event.target.className != 'drop') {
              document.querySelectorAll('.drop').forEach(function (item) {
                item.style.display = 'none'
                isDrop = false

              })

            }

    })

    if (window.innerWidth <= 575) {
      if (modalCopy)
        modalCopy.addEventListener('click', function () {
          modal.style.display = 'none';
        })
    }
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