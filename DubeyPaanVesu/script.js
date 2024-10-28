const hamburgerIcon= document.querySelector(".hamburger-menu-container")
const headerContent= document.querySelector(".header-content")
const closeIcon= document.querySelector(".close-icons")
// sab kuch karne ke baad vedio timining->1-hour-59-minit nav  wala
const nav=document.querySelector('nav')
hamburgerIcon.addEventListener('click',(e)=>{
    e.stopPropagation()// idhar jo bulbing ho rahi hai parent or child wala wo stop ho jayega
    headerContent.classList.add('menu-open')
    
})
// header ke upper bhi bullbling wala effect na jae
headerContent.addEventListener('click',(e)=>{
    e.stopPropagation()//stoppropagation jo child se parent tak bubling hoti hai wo stop o jati hai
})
// nav ke upper bhi stop bulbulnig vedio timing-> 2hour
nav.addEventListener('click',(e)=>{
    e.stopPropagation()
})
closeIcon.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open')
})
// CLASS Bubbling ka use hua hai uske baad isko hidden kiya haai
// bubbling wale ek vedio hai > jisme tum kidhar bhi click karte hi
 //                             > wo pure event pe click mana jata hai
 //                             > parent se child tak jata hai element to html body tak any click event

window.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open')
})
// add sliding imagess in front of website
// script.js
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100; // Shift based on the image width
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

// Optional: Auto slide every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);

// Initial display
showSlide(currentIndex);