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
