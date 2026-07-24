/*=========================================
 Outta Here Dump & Deliver
 script.js
=========================================*/

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuButton.querySelector("i");

    if(navMenu.classList.contains("active")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    }else{

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

/*=========================================
 Sticky Header
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 40){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.10)";
        header.style.background="rgba(255,255,255,.98)";

    }else{

        header.style.boxShadow="0 3px 20px rgba(0,0,0,.05)";
        header.style.background="rgba(255,255,255,.96)";

    }

});

/*=========================================
 Scroll Animations
=========================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(

    ".step, .service-card, .price-card, .feature, .city-grid div, .contact-item"

).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

/*=========================================
 Smooth Anchor Scrolling
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        window.scrollTo({

            top:target.offsetTop-80,

            behavior:"smooth"

        });

    });

});

/*==============================
SCROLL ANIMATIONS
==============================*/

.hidden{

    opacity:0;

    transform:translateY(40px);

    transition:.7s ease;

}

.show{

    opacity:1;

    transform:translateY(0);

}

/*=========================================
 Active Navigation Highlight
=========================================*/

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    const scrollY = window.pageYOffset;

    sections.forEach(section => {

        const sectionHeight = section.offsetHeight;

        const sectionTop = section.offsetTop - 120;

        const sectionId = section.getAttribute("id");

        const navLink = document.querySelector(
            'nav a[href="#' + sectionId + '"]'
        );

        if (!navLink) return;

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {

            navLink.classList.add("active-link");

        } else {

            navLink.classList.remove("active-link");

        }

    });

});

/*=========================================
 Back To Top Button
=========================================*/

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

topButton.className = "back-to-top";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show-top");

    } else {

        topButton.classList.remove("show-top");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
 Button Hover Effect
=========================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});

/*=========================================
 Footer Year
=========================================*/

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Outta Here Dump & Deliver LLC. All Rights Reserved.`;

}
