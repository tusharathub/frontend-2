gsap.registerPlugin(ScrollTrigger);

// Hamburger Menu Toggle
document.querySelector("#header .hamburger-menu").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".nav-links").classList.toggle("active");
});

// Text Animations
const elements = ["#hero-section .animate span", "#work-section .animate span", "#brand .animate span", "#footer .animate span"];
elements.forEach((selector) => {
    gsap.from(selector, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: selector,
            start: "top 90%",
            end: "bottom 80%",
            toggleActions: "play none none none",
        },
    });
});

// Image Section Animation
gsap.to("#image-section .overlay", {
    scrollTrigger: {
        trigger: "#image-section",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,
    },
    scale: 1.1,
    borderRadius: "10px",
});

// Project Cards Animation
gsap.fromTo(
    "#recent-project .grid .item",
    { opacity: 0, y: 50 },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#recent-project .grid",
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
        },
    }
);

// Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);