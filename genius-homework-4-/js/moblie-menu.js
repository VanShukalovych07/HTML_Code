const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const menuLinks = document.querySelectorAll(".mobile-menu .menu-link");

const toggleMenu = () => {
  mobileMenu.classList.toggle("is-open");
  disableScroll();
};

const disableScroll = () =>
  document.body.classList.toggle("is-scroll-disabled");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);

menuBtnOpen.addEventListener("click", disableScroll);
menuBtnClose.addEventListener("click", disableScroll);

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.classList.remove("is-open");
    disableScroll();
  });
});
