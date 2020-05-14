(function () {

  var menu = document.querySelector('.menu')
  var menuTrigger = document.querySelector('.js-menuTrigger')
  var miniprofileTrigger = document.querySelector('.js-miniprofileTrigger')
  var miniprofile = document.querySelector('.miniprofile')
  var isOpen = false
  var isMiniprofile = false

  menuTrigger.addEventListener('click', function () {
    if (window.innerWidth <= 1025) {
      if (!isOpen) {
        menu.style.boxShadow = '0px 0px 10px rgba(79, 255, 202, 0.7)'
        if (window.innerWidth <= 768) {
          menu.style.transform = 'translateX(0)'
          menu.style.width = '340px'
        }
        if (window.innerWidth <= 425) {
          menu.style.width = '100%'
        } else
          menu.style.width = '340px'

        isOpen = true
      } else {
        menu.style.boxShadow = 'none'
        if (window.innerWidth <= 768) {
          menu.style.transform = 'translateX(-100px)'
          menu.style.width = '0'
        }
        if (window.innerWidth <= 1024)
          menu.style.width = '70px'
        else
          menu.style.width = '70px'

        isOpen = false

      }
    } else {
      // Открытие минипрофиля 
      if (!isMiniprofile) {
        miniprofile.style.right = '0'
        miniprofile.style.boxShadow = '0px 0px 10px rgba(79, 255, 202, 0.7)'

        isMiniprofile = true
      } else {
        miniprofile.style.right = '-400px'
        miniprofile.style.boxShadow = 'none'

        isMiniprofile = false
      }
    }

  })

  miniprofileTrigger.addEventListener('click', function () {
    if (window.innerWidth <= 992) {
      if (!isMiniprofile) {
        miniprofile.style.right = '0'
        miniprofile.style.boxShadow = '0px 0px 10px rgba(79, 255, 202, 0.7)'

        isMiniprofile = true
      } else {
        miniprofile.style.right = '-400px'
        miniprofile.style.boxShadow = 'none'

        isMiniprofile = false
      }
    }
  })


}());