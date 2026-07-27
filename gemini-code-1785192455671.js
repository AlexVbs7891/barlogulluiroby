// js/animations.js
document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS
    if(typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-out-cubic'
        });
    }

    // GSAP Loader Timeline
    if(typeof gsap !== 'undefined') {
        const tl = gsap.timeline();
        
        tl.to(".loader-fill", { width: "100%", duration: 1.5, ease: "power2.inOut" })
          .to(".loader-wrapper", { y: "-100%", duration: 0.8, ease: "power4.inOut", delay: 0.2 })
          .from(".navbar", { y: -100, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.4");
          
        // Hero specific animations (if on index)
        if(document.querySelector('.hero-title')) {
            tl.from(".hero-title", { scale: 0.8, opacity: 0, duration: 1, ease: "elastic.out(1, 0.5)" }, "-=0.4")
              .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.6 }, "-=0.6")
              .from(".btn-neon", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");
        }
    } else {
        // Fallback if GSAP is blocked
        document.querySelector('.loader-wrapper').style.display = 'none';
    }
});