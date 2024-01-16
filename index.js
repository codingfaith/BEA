// grab DOM elements
const nav = document.getElementById('nav')
const menu = document.getElementById('menu')
const closeX = document.getElementById('close')
const allATags = document.getElementsByTagName('a')
const more_eagler = document.getElementById('more_eagler')
const specialisation = document.getElementById('specialisation')
const more_servicesBtn = document.getElementById('more-services')
const people_read_moreBtn = document.getElementById('people_read-more')
const specialisation_title = document.getElementById('specialisation_title')
const contact_logo_container = document.getElementById('contact-logo-container')

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
    specialisation.style.display = "block"
    more_servicesBtn.style.display = "none"
    specialisation_title.style.display = "block"
    specialisation_title.style.marginTop = "-35px"
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
        tag.addEventListener('click',()=>{
            nav.style.display = "none" 
        })
    }     
}
if (screenWidth >= 800) {
    contact_logo_container.style.display = "block"
}

