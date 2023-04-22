/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".products__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1024: {
            spaceBetween: 72,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelectorAll('.nav__menu a[href*=' + sectionId + ']')

        sectionClass.forEach(link => {
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    })
}

window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-su-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moom-line' : 'ri-sun-line'


if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'] (iconTheme)
}

themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    durations: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data, .products__container, .footer__container, .footer__info`)
sr.reveal(`.home__images`, {delay: 600, origin: 'bottom'})
sr.reveal(`.new__card, .brand__img`, {interval: 100})
sr.reveal(`.collection__explore:nth-child(1)`, {origin: 'right'},)
sr.reveal(`.collection__explore:nth-child(2)`, {origin: 'left'},)