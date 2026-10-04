// =========================
// PORTFOLIO JAVASCRIPT
// =========================

// Reveal sections when they enter the screen
const sections = document.querySelectorAll("section");

const revealSections = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


// =========================
// HIRE ME BUTTON
// =========================

const hireButton = document.querySelector(".hero .btn");

if (hireButton) {
    hireButton.addEventListener("click", () => {
        console.log("Thanks for checking out my portfolio!");
    });
}


// =========================
// CURRENT YEAR
// =========================

const footerText = document.querySelector("footer p");

if (footerText) {
    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `&copy; ${currentYear} Adekunle Emmanuel. All rights reserved.`;
}
