(function () {

  const menu = document.querySelector('.menu')
  const menuTrigger = document.querySelector('.js-menuTrigger')
  let isOpen = false

  menuTrigger.addEventListener('click', function () {
    if (!isOpen) {
      menu.style.width = '340px'
      isOpen = true
    } else {
      menu.style.width = '90px'
      // menu.style.transform = 'translateX(-340px)'
      isOpen = false

    }
  })

}());