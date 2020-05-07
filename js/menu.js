(function () {

  const menu = document.querySelector('.menu')
  const menuItems = document.querySelectorAll('.menu-item__text')
  const menuTrigger = document.querySelector('.js-menuTrigger')
  let isOpen = false

  menuTrigger.addEventListener('click', function () {
    if (!isOpen) {
      menu.style.boxShadow = '0px 0px 10px rgba(79, 255, 202, 0.7)'
      if (window.innerWidth <= 768) {
        menu.style.transform = 'translateX(0)'
        menu.style.width = '340px'
      } else if (window.innerWidth <= 425)
        menu.style.width = '100%'
      else
        menu.style.width = '340px'
      menuItems.forEach(function (item) {
        // item.style.display = 'block'
      })
      isOpen = true
    } else {
      menu.style.boxShadow = 'none'
      if (window.innerWidth <= 768) {
        menu.style.transform = 'translateX(-100px)'
        menu.style.width = '0'
      } else if (window.innerWidth <= 1024)
        menu.style.width = '80px'
      else
        menu.style.width = '96px'

      // menu.style.transform = 'translateX(-340px)'
      isOpen = false

    }
  })

}());