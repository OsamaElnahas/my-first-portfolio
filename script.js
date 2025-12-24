const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

let isOpen = false;

// menuBtn.addEventListener("click", () => {
//     if (!isOpen) {
//         mobileMenu.classList.remove("close");
//         mobileMenu.classList.add("open");
//         isOpen = true;
//     } else {
//         mobileMenu.classList.remove("open");
//         mobileMenu.classList.add("close");
//         isOpen = false;
//     }
// });

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    mobileMenu.classList.toggle("close");
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 120;

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();