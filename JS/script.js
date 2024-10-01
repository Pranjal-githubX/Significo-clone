var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1.7,
    }
})
function GSAP() {
    gsap.set(".marquee", {
        scale: 13
    })
    tl.to(".page1 video", {
        "--clip": "3.1578%",
        duration: 5,

    }, "a")
    tl.to(".page1 video", {
        opacity:0,
        duration: 0,
        scrollTrigger: {
            scrub: false,
            
        }
    })

    tl.to(".marquee", {
        scale: 1,
        scrollTrigger: {
            trigger: ".page1",
            scrub: 2.5,
            // pin: false,
        }
    }, 'a')

    tl.to(".left", {
        xPercent: -2,
        stagger: .03,
        pin: true,
        duration: 3
    }, "b")
    tl.to(".right", {
        xPercent: 2,
        pin: true,
        stagger: .03,
        duration: 3
    }, "b")


    gsap.from(".data-section .heading *", {
        y: 150,
        opacity: 0,
        duration: 1.1,
        stagger: 0.2,
        ease: "circ.in",
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: {
            trigger: ".data-section .heading",
            start: "top 80%",
        }
    });
}
function onLoad() {
    let tl = gsap.timeline()
    tl.from("nav h1", {
        opacity: 0,
        duration: 1.3,
        delay: 0
    }, "c")
    tl.from("nav div h4, nav div button, nav div button h4", {
        opacity: 0,
        duration: 1,
        stagger: .3
    }, "c")
    tl.from(".txt *", {
        opacity: 0,
        stagger: .02,
        duration: .3,
    }, "c")
}
function breakElem(selector) {
    let elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        let splitTxt = element.innerText.split("");
        let clutter = "";
        for (const char of splitTxt) {
            clutter += `<span>${char}</span>`;
        }
        element.innerHTML = clutter;
    });
}

breakElem(".data-section .heading > *")

// javascript()
GSAP()
// onload()
breakElem()
