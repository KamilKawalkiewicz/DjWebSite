const iconBurger = document.querySelector(".header__burger");
iconBurgerspan = document.querySelectorAll(".header__burger span");
const menu = document.querySelector(".header__menu");
const menuLink = document.querySelectorAll(".header__menu-link");

const menuSlide = () => {
    // menu and hamburger slide animation
    iconBurger.addEventListener("click", function () {
        menu.classList.toggle("activeMenu");
        this.classList.toggle("activeBurger");
        // animation span burger
        iconBurgerspan.forEach((span) => {
            span.classList.toggle("animBurger");
        })
        // text header-link animation
        menuLink.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `menu-links-fade .5s ease forwards ${index / 8}s`;
            }
        })
    });
}

menuSlide()

// scroll button
$(".arrow").click(function () {
    $("body,html").animate({
        scrollTop: $(".wrapper").offset().top
    }, 500)
});

$("#home").click(function () {
    $("body,html").animate({
        scrollTop: $(".wrapper").offset().top
    }, 800)
});
$("#shows").click(function () {
    $("body,html").animate({
        scrollTop: $(".shows").offset().top
    }, 800)
});
$("#podcasts").click(function () {
    $("body,html").animate({
        scrollTop: $(".podcasts").offset().top
    }, 800)
});
$("#djs").click(function () {
    $("body,html").animate({
        scrollTop: $(".recoments").offset().top
    }, 800)
});
$("#about").click(function () {
    $("body,html").animate({
        scrollTop: $(".footer").offset().top
    }, 800)
});