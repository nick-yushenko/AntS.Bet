(function () {

  const menu = document.querySelector('.menu')
  const menuItems = document.querySelectorAll('.menu-item__text')
  const menuTrigger = document.querySelector('.js-menuTrigger')
  let isOpen = false

  menuTrigger.addEventListener('click', function () {
    if (!isOpen) {
      if (window.innerWidth <= 425)
        menu.style.width = '100%'
      else
        menu.style.width = '340px'
      menuItems.forEach(function (item) {
        // item.style.display = 'block'
      })
      isOpen = true
    } else {
      if (window.innerWidth <= 1024)
        menu.style.width = '80px'
      else
        menu.style.width = '96px'
      menuItems.forEach(function (item) {
        // item.style.display = 'none'
      })
      // menu.style.transform = 'translateX(-340px)'
      isOpen = false

    }
  })

}());