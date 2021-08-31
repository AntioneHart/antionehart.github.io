/*===Display Menu/ Hide Menu====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

  if(navToggle){
    navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
    })
  }

  if(navClose){
    navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
    })
  }

  /*====Remove Menu Mobile =====*/

  const navLink = document.querySelectorAll('.nav_link')

  function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
  }

  navLink.forEach(n => n.addEventListener('click', linkAction))




  /*======== Portfolio Swiper========== */
  let swiper = new Swiper('.portfolio_container', {
    cssMode: true,
    loop: true,

    navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination:{
      el: '.swiper-pagination',
      clickable: true,
    },
  })

  /*======Scroll Section Active Link=======*/
  const sections = document.querySelectorAll('section[id]')

  function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
      } else{
        document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
    })
  }

  window.addEventListener('scroll', scrollActive)


  /*======Change Background Header=======*/
 function scrollHeader(){
   const nav = document.getElementById('header')
   if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
 }
 window.addEventListener('scroll', scrollHeader)

  /*======Services Modal=======*/
    const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

    let modal = function(modalClick){
      modalViews[modalClick].classList.add('active-modal')
    }

    modalBtns.forEach((modalBtn, i) =>{
      modalBtn.addEventListener('click', () =>{
        modal(i)
      })
    })

    modalCloses.forEach((modalClose) => {
      modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) => {
          modalView.classList.remove('active-modal')
        })
      })
    })

    /*======Scroll Top=======*/
    function scrollUp(){
      const scrollUp = document.getElementById('scroll-up');
      if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp);

   /*======Dark Theme=======*/
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = "fa-sun"

    //Previously Selected
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    //Obtain Current theme that the interface has by validating dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

    if(selectedTheme){
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
      themeButton.classList[selectedIcon === 'far fa-moon' ? 'add' : 'remove'](iconTheme)
    }

    themeButton.addEventListener('click', () =>{
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)
      //We save the theme and the curent Icon that user selects
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
    })