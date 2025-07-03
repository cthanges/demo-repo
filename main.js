const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line")
});

const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal(".header__container h1",{
    ...ScrollRevealOption,
})

ScrollReveal().reveal(".header__container h2",{
    ...ScrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".social-icon",{
    ...ScrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".about__container p",{
    ...ScrollRevealOption,
    interval: 500,
})

ScrollReveal().reveal(".experience__list li",{
    ...ScrollRevealOption,
    interval: 500,
})

ScrollReveal().reveal(".project__card",{
    ...ScrollRevealOption,
    interval: 500,
})

ScrollReveal().reveal(".contact-form",{
    ...ScrollRevealOption,
    interval: 500,
})

ScrollReveal().reveal(".footer__container h2",{
    ...ScrollRevealOption,
})

ScrollReveal().reveal(".footer__container p",{
    ...ScrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".footer__container .mail__to",{
    ...ScrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".footer__socials",{
    ...ScrollRevealOption,
    delay: 1500,
})