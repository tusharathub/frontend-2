
gsap.registerPlugin(ScrollTrigger)


const elements = ["#hero-section .animate span", "#work-section .animate span", "brand .animate span", "#footer .animate span"];

elements.forEach((selector) =>{
    gsap.from(selector, {
        y:300,
        rotation: 15,
        duration: 4,
        stagger: 0.1,
        markers: true,
        ease: "power4.out",
        
        scrollTrigger:{
            trigger: selector,
            start: "top 120%",
            end: "bottom 90%",
            toggleActions: "play none none none",
            // scrub: 4,
        }
    })
})

// ---------------------------------------image animation-----------------------------------------------------------------------
gsap.to("#image-section .overlay", {
    scrollTrigger: {
        trigger: "#image-section",
        start: "top 90%",
        end: "bottom bottom",
        // markers: true,
        scrub: 1,
    },
    width: "86vw",
})


// ---------------------------------------cards animation-----------------------------------------------------------------------
gsap.fromTo("#recent-project .grid .item", {
    opacity: 0,
    y: 100,
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger:{
        trigger: "#recent-project .grid",
        start: "top 70%",
        end: "bottom 70%",
        scrub: 1,
    }
})

// ---------------------------------------brand infinity-----------------------------------------------------------------------
var infinity = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(infinity)

// ---------------------------------------smooth scroll-----------------------------------------------------------------------

const lenis = new Lenis({
    duration : 6,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);