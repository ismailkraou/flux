// "use strict";

// animation reset
AOS.init();

// modal setting
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


// menu in mobile and tablet
const hamburgerButton = document.getElementById('hamburgerButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownMenuicon = document.querySelector('#hamburgerButton i');
const smnavitem = document.querySelectorAll('.sm-nav-item');// sm-nav-item
// hamburger Button setting
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

// dropdown Menu setting hide and show
smnavitem.forEach(e => {
    e.addEventListener('click' , ()=> {
        dropdownMenu.classList.toggle('hidden');
    })
})


// handle Scroll Y derection
// Get the navbar element
const navbar = document.getElementById('navbar');

// Function to toggle the 'scrolled' class based on scroll position
function handleScroll() {
    if (window.scrollY >= (window.innerHeight - 500) ) {
        navbar.classList.add('bg-black');
    } else {
        navbar.classList.remove('bg-black');
    }
}

// Function to hide the navigation header based on current Scroll Pos and viewport Height 100vh
let prevScrollpos = window.pageYOffset;
const viewportHeight = window.innerHeight;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    // Scrolling up
    document.querySelector("#home").classList.remove("hidden");
    dropdownMenu.classList.add('hidden');
    dropdownMenuicon.classList.remove('fa-xmark');
    dropdownMenuicon.classList.add('fa-bars');
  } else {
    // Scrolling down
    if (currentScrollPos > viewportHeight) {
        document.querySelector("#home").classList.add("hidden");
        dropdownMenu.classList.add('hidden');
        dropdownMenuicon.classList.remove('fa-xmark');
        dropdownMenuicon.classList.add('fa-bars');
    }
  }

  prevScrollpos = currentScrollPos;
};

// Listen for the scroll event and call the handleScroll function
window.addEventListener('scroll', handleScroll);



// see more text in about sedtion
function toggleText() {
    // get element dots and showmoretext and seemorebtn
    const showmoretext = document.getElementById('showmoretext');
    const seemorebtn = document.getElementById('seemorebtn');
    const dots = document.getElementById('dots');

    if (showmoretext.classList.contains('hidden')) {
        // If text is currently expanded, collapse it
        showmoretext.classList.remove('hidden');
        seemorebtn.textContent = 'lire moins';
        dots.classList.add('hidden');
    } else {
        // If text is currently collapsed, expand it
        showmoretext.classList.add('hidden');
        seemorebtn.textContent = 'lire plus';
        dots.classList.remove('hidden');
    }
}



// insta feeds target _black
const targetLinks = document.querySelectorAll("#instafeed-container a");

targetLinks.forEach(link => {
link.setAttribute("target", "_blank");
});


// instagram feeds
