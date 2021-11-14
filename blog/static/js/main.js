/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__subtitle', {})
sr.reveal('.home__description', {})
sr.reveal('.home__title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home__img', {delay: 400})
sr.reveal('.home__social-icon', {interval: 200})

/*SCROLL ABOUT*/
/*SCROLL SKILLS*/
/*ACCORDION SKILLS*/
var skillsHeader = document.getElementsByClassName('skills__header');
var i;

for (i =0; i < skillsHeader.length; i++) {
    skillsHeader[i].addEventListener('click', function() {
        this.classList.toggle('active');

        var skillsList = this.nextElementSibling;
        if (skillsList.style.display === 'grid') {
            skillsList.style.display = 'none';
        } else {
            skillsList.style.display = 'grid';
        }
    });
}

/*SCROLL WORK*/
/*SCROLL CONTACT*/