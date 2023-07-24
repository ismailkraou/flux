// "use strict";

AOS.init();
const modal = document.getElementById('myModal') ;
const modalVideo = document.getElementById('framplayer');
const closeModal = document.getElementById('closeModal');

modal.addEventListener('click' ,  (e)=> {
    console.log(modal)
    modal.close();
    if(e.target.id !== modalVideo.id){
        modal.close();
    }
})

const workThumbs = document.querySelectorAll('.work-thumb');
workThumbs.forEach(e => {
    e.addEventListener('click' , ()=> {
        modalVideo.src = '';
        console.log(e.getAttribute('data-video')) ;
        modal.showModal()
        modalVideo.src = e.getAttribute('data-video');
    })
})

const hamburgerButton = document.getElementById('hamburgerButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownMenuicon = document.querySelector('#hamburgerButton i');
const smnavitem = document.querySelectorAll('.sm-nav-item');
// sm-nav-item

hamburgerButton.addEventListener('click', function() {
  dropdownMenu.classList.toggle('hidden');
  if(dropdownMenuicon.classList.contains('fa-bars')){
    dropdownMenuicon.classList.remove('fa-bars');
    dropdownMenuicon.classList.add('fa-xmark');
  }else{
    dropdownMenuicon.classList.remove('fa-xmark');
    dropdownMenuicon.classList.add('fa-bars');
  }
  
});


smnavitem.forEach(e => {
    e.addEventListener('click' , ()=> {
        dropdownMenu.classList.toggle('hidden');
    })
})

// Get the navbar element
const navbar = document.getElementById('navbar');

// Function to toggle the 'scrolled' class based on scroll position
function handleScroll() {
if (window.scrollY >= (window.innerHeight - 200) ) {
    navbar.classList.add('bg-black');
} else {
    navbar.classList.remove('bg-black');
}
}

// Listen for the scroll event and call the handleScroll function
window.addEventListener('scroll', handleScroll);

// see more text
function toggleText() {
    const textElement = document.getElementById('seemoretext');
    const btnElement = document.getElementById('seemorebtn');

    if (textElement.classList.contains('max-h-20')) {
        // If text is currently expanded, collapse it
        textElement.classList.remove('max-h-20');
        btnElement.textContent = 'Voir moins';
    } else {
        // If text is currently collapsed, expand it
        textElement.classList.add('max-h-20');
        btnElement.textContent = 'Voir plus';
    }
}

// insta feeds target _black
const targetLinks = document.querySelectorAll("#instafeed-container a");

targetLinks.forEach(link => {
link.setAttribute("target", "_blank");
});


// instagram feeds
var userFeed = new Instafeed({
    get: 'vicsiiz',
    target: "instafeed-container",
    resolution: 'low_resolution',
    limit: 4,
    template:'<a data-aos="zoom-in" data-aos-duration="600" data-aos-anchor-placement="top-center" target="_blank" href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>',
    accessToken: 'IGQVJXRG9OdF9TZAmpWNVNfRklZAa0pmM2loVko0bVZAheHFoMk9KNHdmX3hXN2lTX2VZAaWJuUkdNNmxReTh1SEIwYnZARRGpCMTdia3dWZAGVrSm0xcFk5UmNDU3hYVXFyM01JTE1SWjRRMnZANRTg2NTRmMwZDZD'
});
userFeed.run();