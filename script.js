/* ================================
   PAGE LOADER
================================ */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(function () {
            loader.style.display = "none";
        }, 500);
    }

});


/*==================================================
TYPING EFFECT
==================================================*/

const typingText = [
    "Software Developer",
    "Full Stack Developer",
    "Java Developer",
    "Python Developer",
    "AI Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const current = typingText[textIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            textIndex = (textIndex + 1) % typingText.length;
        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


/*==================================================
DARK / LIGHT MODE
==================================================*/

const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});


/*==================================================
MOBILE MENU
==================================================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    }

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


/*==================================================
STICKY NAVBAR
==================================================*/

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.padding = "12px 10%";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    } else {

        navbar.style.padding = "18px 10%";
        navbar.style.boxShadow = "none";

    }

});


/*==================================================
ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==================================================
SCROLL REVEAL ANIMATION
==================================================*/

const reveals = document.querySelectorAll(

    ".section, .glass-card, .card, .skill-card, .project-card, .timeline-item"

);

function revealAnimation() {

    const trigger = window.innerHeight - 120;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("active");

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealAnimation);

revealAnimation();


/*==================================================
ANIMATED SKILL BARS
==================================================*/

const bars = document.querySelectorAll(".progress");

function animateBars() {

    bars.forEach(bar => {

        const width = bar.classList[1];

        switch (width) {

            case "java":
                bar.style.width = "90%";
                break;

            case "python":
                bar.style.width = "85%";
                break;

            case "html":
                bar.style.width = "95%";
                break;

            case "css":
                bar.style.width = "92%";
                break;

            case "javascript":
                bar.style.width = "88%";
                break;

            case "sql":
                bar.style.width = "85%";
                break;

            case "git":
                bar.style.width = "80%";
                break;

        }

    });

}

window.addEventListener("scroll", animateBars);


/*==================================================
BACK TO TOP BUTTON
==================================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==================================================
SMOOTH SCROLLING
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*==================================================
CONTACT FORM
==================================================*/

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been recorded.");

        form.reset();

    });

}


/*==================================================
CURRENT YEAR (OPTIONAL)
==================================================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/*==================================================
END OF FILE
==================================================*/