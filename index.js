// grab DOM elements
const nav = document.getElementById('nav')
const menu = document.getElementById('menu')
const closeX = document.getElementById('close')
const allATags = document.getElementsByTagName('a')
const more_eagler = document.getElementById('more_eagler')
const our_services = document.getElementById('our-services')
const contact_logo = document.getElementById('contact-logo')
const allLogos = document.getElementsByClassName('bea-image')
const main_services = document.getElementById('main-services')
const services_title = document.getElementById('services-title')
const specialisation = document.getElementById('specialisation')
const more_servicesBtn = document.getElementById('more-services')
const people_read_moreBtn = document.getElementById('people_read-more')
const specialisation_title = document.getElementById('specialisation_title')



// show nav bar when menu bar is clicked
menu.addEventListener('click',()=>{
    nav.style.display = "flex"
})

// hide nav bar (X) is clicked
closeX.addEventListener('click',()=>{
    nav.style.display = "none"
})

// show specialisation div, hide read more button and display and reposition title when read more button is clicked
more_servicesBtn.addEventListener('click',()=>{
    main_services.style.display = "none"
    services_title.style.display ="none"
    specialisation.style.display = "block"
    more_servicesBtn.style.display = "none"
    specialisation_title.style.display = "block"
    window.scrollTo({
        top: specialisation.offsetTop - (0.15 * window.innerHeight),
        behavior: 'smooth'
    })
})

// show more_eagler paragraph when the read more button is clicked
people_read_moreBtn.addEventListener('click',()=>{
    more_eagler.style.display = "block"
    people_read_moreBtn.style.display = "none"
})

// hide navbar when a link is clicked
const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
for(let tag of allATags){
    if (screenWidth < 481) {
        contact_logo.style.display = "none"
        tag.addEventListener('click',()=>{
            nav.style.display = "none" 
        })
    }     
}

//hide section logos on large screens
if (screenWidth >= 600) {
    for(let logo of allLogos){
        logo.style.display = "none"
    }
}

//use navbar to navigate to different sections on the page
function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId)
    if (section) {
        window.scrollTo({
            top: section.offsetTop - (0.15 * window.innerHeight),
            behavior: 'smooth'
        })
    }
}
//go back to main services when clicked
our_services.addEventListener('click',()=>{
    main_services.style.display = "flex"
    services_title.style.display ="flex"
    specialisation.style.display = "none"
    more_servicesBtn.style.display = "block"
})