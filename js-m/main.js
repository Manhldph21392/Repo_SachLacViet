

const iconMenuMobile = document.querySelector(".menu__desktop__category");
const menuMobile = document.querySelector(".menu__desktop__all__category");

let isMenuMobileVisible = false;

iconMenuMobile.addEventListener("click", function () {
  if (isMenuMobileVisible) {
    menuMobile.style.display = "none";
    isMenuMobileVisible = false;
  } else {
    menuMobile.style.display = "block";
    isMenuMobileVisible = true;
  }
});