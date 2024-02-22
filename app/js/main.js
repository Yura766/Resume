
// header btn
const burger = document.querySelector('.burger');
burger.addEventListener('click', (e) => burger.className == 'burger' ? burger.classList.add('burger-active') : burger.classList.remove('burger-active'))

const sound = document.querySelector('.sound');
const soundSvg = document.querySelector('#sound-svg');

sound.addEventListener('click', (e) => {
    sound.className == 'sound' ? sound.classList.add('sound-active') : sound.classList.remove('sound-active')

    if (sound.className == 'sound sound-active') {
        soundSvg.children[1].style.opacity = 0;
        soundSvg.children[2].style.opacity = 0;
    } else {
        soundSvg.children[1].style.opacity = 1;
        soundSvg.children[2].style.opacity = 1;
    }
})
// // cursor
// gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

// let xTo = gsap.quickTo(".cursor", "x", { duration: 0.4, ease: "power3" }),
//     yTo = gsap.quickTo(".cursor", "y", { duration: 0.4, ease: "power3" });

// window.addEventListener("mousemove", e => {
//     xTo(e.clientX);
//     yTo(e.clientY);
// });

// window.addEventListener("mouseover", e => {
//     // e.relatedTarget.localName == 'button'
    
//     // document.querySelector('.cursor').style.background = 'red'
// })


// nav pin
ScrollTrigger.create({
    trigger: ".header",
    start: "top top",
    endTrigger: ".footer",
    end: "0 0",
    pin: true,
    // markers: true,
    pinSpacing: false,
    // scrub: 1,
});

//nav click scroll
const section = gsap.utils.toArray(".section")
const navItem = gsap.utils.toArray(".nav__item")

navItem.forEach((element, i) => {
    element.addEventListener('click', (e) => {
        gsap.to(window, { scrollTo: section[i] });
    })
});

// nav active
section.forEach((e, i) => {
    ScrollTrigger.create({
        trigger: e,
        markers: true,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => self.isActive == true ? navItem[i].classList.add("active") : navItem[i].classList.remove("active")
    })
});


// function setActive(e) {
//     // navItem.forEach(el => el.classList.remove("active"));
//     e.classList.add("active");
// }


//



// ScrollTrigger.create({
//     trigger: '.welcom__section',
//     start: "top  top",
//     end: '100% top',
//     markers: true,
//     onEnter: ({ progress, direction, isActive }) => {
//         console.log('onEnter' + " - " + progress, direction, isActive)
//         gsap.to(window, { duration: .5, scrollTo: ".about__section" });
//     },
//     onEnterBack: ({ progress, direction, isActive }) => {
//         console.log('onEnterBack' + " - " + progress, direction, isActive)
//         gsap.to(window, { duration: .5, scrollTo: ".welcom__section" });
//     },


//     // onLeave: ({ progress, direction, isActive }) => console.log('onLeave' + " - " + progress, direction, isActive),
//     // onLeaveBack: ({ progress, direction, isActive }) => {
//     //     console.log('onLeaveBack' + " - " + progress, direction, isActive)
//     // },


// })
// section.forEach((e, i) => {


// })



// three js

