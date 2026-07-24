// ==========================================
// OUTTA HERE DUMP & DELIVER
// Main JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector("header");
    const menuButton = document.getElementById("menuButton");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav a");
    const backToTop = document.getElementById("backToTop");

    // ==========================================
    // Mobile Menu
    // ==========================================

    if (menuButton) {

        menuButton.addEventListener("click", () => {

            nav.classList.toggle("active");

            document.body.classList.toggle("mobile-open");

            menuButton.innerHTML = nav.classList.contains("active")
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';

        });

    }

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            document.body.classList.remove("mobile-open");

            if(menuButton){

                menuButton.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

            }

        });

    });

    // ==========================================
    // Sticky Header
    // ==========================================

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){

            header.style.top = "10px";
            header.style.boxShadow =
            "0 15px 35px rgba(0,0,0,.15)";

        }else{

            header.style.top = "20px";
            header.style.boxShadow =
            "0 15px 35px rgba(0,0,0,.08)";

        }

    });

    // ==========================================
    // Fade-In Animation
    // ==========================================

    const animatedItems =
        document.querySelectorAll(
            ".step,.service-card,.price-card,.feature,.quote-form,.contact-item,.area-image,.area-content"
        );

    animatedItems.forEach(item => {

        item.classList.add("fade-up");

    });

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    animatedItems.forEach(item=>{

        observer.observe(item);

    });

    // ==========================================
    // Active Navigation
    // ==========================================

    const sections = document.querySelectorAll("section[id]");

    function updateActiveNav() {

        const scrollY = window.pageYOffset;

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 140;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (
                scrollY >= sectionTop &&
                scrollY < sectionTop + sectionHeight
            ) {

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") === "#" + sectionId
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);

    // ==========================================
    // Back To Top Button
    // ==========================================

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    // ==========================================
    // Smooth Anchor Scrolling
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

    // ==========================================
    // Footer Copyright Year
    // ==========================================

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

    // ==========================================
    // Close Menu on Resize
    // ==========================================

    window.addEventListener("resize", () => {

        if (window.innerWidth > 950) {

            nav.classList.remove("active");

            document.body.classList.remove("mobile-open");

            if (menuButton) {

                menuButton.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            }

        }

    });
// ==========================================
// TESTIMONIAL SLIDER
// ==========================================

const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let slideInterval;

function showSlide(index){

    testimonials.forEach((testimonial,i)=>{

        testimonial.classList.toggle("active", i===index);

    });

    dots.forEach((dot,i)=>{

        dot.classList.toggle("active", i===index);

    });

    currentSlide = index;

}

function nextSlide(){

    let next = currentSlide + 1;

    if(next >= testimonials.length){

        next = 0;

    }

    showSlide(next);

}

function startSlider(){

    slideInterval = setInterval(nextSlide,6000);

}

function restartSlider(){

    clearInterval(slideInterval);

    startSlider();

}

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        showSlide(index);

        restartSlider();

    });

});

showSlide(0);

startSlider();
});
