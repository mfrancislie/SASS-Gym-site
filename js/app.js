const mobile = document.querySelector('#mobile-bar')
const navbarMenu = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('.navbar_logo')
const body = document.querySelector('body')

mobile.addEventListener('click', () => {
  mobile.classList.toggle('is-active')
  navbarMenu.classList.toggle('active')
  body.classList.toggle('active')
})

//hide moble menu
navbarMenu.addEventListener('click', () => {
  const menuBar = document.querySelector('.is-active')
  if (window.innerWidth <= 786 && menuBar) {
    mobile.classList.toggle('is-active')
    navbarMenu.classList.remove('active')
    body.classList.remove('active')
  }
})

navLogo.addEventListener('click', () => {
  const menuBar = document.querySelector('.is-active')
  if (window.innerWidth <= 786 && menuBar) {
    mobile.classList.toggle('is-active')
    navbarMenu.classList.remove('active')
  }
})

/* When the scroll is higher than 560 viewport height, add 
the show-scroll class to the a tag with the scroll-top class */
window.addEventListener('scroll', () => {
  const scrollUp = document.getElementById('scroll-up')
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
})
