

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
//categoty mobile


// search mobile
function toggleSearchMobile() {
  var categories = document.getElementById("categories");
  var inputSearch = document.querySelector(".input__search__mobile input");

  if (categories.style.display === "block") {
    categories.style.display = "none";
    inputSearch.style.display = "block";
  } else {
    categories.style.display = "block";
    inputSearch.style.display = "none";
  }
}

document.querySelector(".btn__search__mobile button").addEventListener("click", function() {
  toggleSearchMobile();
});