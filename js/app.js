const mobile = document.querySelector('#mobile-bar')
const navbarMenu = document.querySelector('.navbar_menu')
const body = document.querySelector('body')

mobile.addEventListener('click', () => {
  mobile.classList.toggle('is-active')
  navbarMenu.classList.toggle('active')
  body.classList.toggle('active')
})
