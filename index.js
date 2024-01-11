// grab DOM elements
const nav = document.getElementById('nav')
const menu = document.getElementById('menu')
const closeX = document.getElementById('close')
const allATags = document.getElementsByTagName('a')
const more_eagler = document.getElementById('more_eagler')
const specialisation = document.getElementById('specialisation')
const more_servicesBtn = document.getElementById('more-services')
const people_read_moreBtn = document.getElementById('people_read-more')

// show nav bar when menu bar is clicked
menu.addEventListener('click',()=>{
    nav.style.display = "flex"
})

// hide nav bar (X) is clicked
closeX.addEventListener('click',()=>{
    nav.style.display = "none"
})

// show specialisation div and hide read more button when read more button is clicked
more_servicesBtn.addEventListener('click',()=>{
    specialisation.style.display = "block"
    more_servicesBtn.style.display = "none"

})

// show more_eagler paragraph when the read more button is clicked
people_read_moreBtn.addEventListener('click',()=>{
    more_eagler.style.display = "block"
    people_read_moreBtn.style.display = "none"
})

// hide navbar when a link is clicked
for(let tag of allATags){
    tag.addEventListener('click',()=>{
        nav.style.display = "none"
    })
}

