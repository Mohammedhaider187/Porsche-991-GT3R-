window.addEventListener("scroll", function() {
    const header = document.getElementById("navbar");
    if (window.scrollY > 50) { 
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

ScrollReveal().reveal('.car, .car1', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
});

ScrollReveal().reveal('.specs, .carousel-container, .track .track-data, .biography .biography-data, .sponsors', {
    delay: 300,
    distance: '60px',
    origin: 'bottom',
    duration: 1000,
    interval: 200, 
});

var typed = new Typed('.element', {
    strings: ["The Porsche 991 GT3R"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});




window.onload = function() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; 
};


window.onload = function() {
    // Fade in the navbar
    gsap.from(".navbar", { opacity: 0, y: -50, duration: 0.3 });
};


var swiper = new Swiper('.swiper-container', {
    loop: true,             
    autoplay: {
        delay: 0,           
        disableOnInteraction: false, 
    },
    speed: 3000,            
    slidesPerView: 'auto', 
    spaceBetween: 100,      
    breakpoints: {
        768: {
            slidesPerView: 3,  
        },
        480: {
            slidesPerView: 1,  
        }
    }
});