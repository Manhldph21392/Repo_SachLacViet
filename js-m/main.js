

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
function toggleMenuMobileCategory() {
  const menuMobileAllCategory = document.querySelector(".menu__mobile__all__category");
  menuMobileAllCategory.classList.toggle("active");
}


// search mobile
const iconSearch = document.querySelector(".btn__search__mobile");
const searchInput = document.querySelector(".input__search__mobile");
const documentBody = document.body;

iconSearch.addEventListener("click", function (e) {
  e.stopPropagation(); // Ngăn chặn sự kiện click từ việc lan truyền lên đến document

  searchInput.classList.toggle("active");
  documentBody.classList.toggle("search-active");

  // Thêm một event listener cho sự kiện click trên document
  document.addEventListener("click", closeSearchOnOutsideClick);
});

function closeSearchOnOutsideClick(e) {
  // Kiểm tra xem sự kiện click không phải từ iconSearch hoặc searchInput
  if (!iconSearch.contains(e.target) && !searchInput.contains(e.target)) {
    searchInput.classList.remove("active");
    documentBody.classList.remove("search-active");

    // Gỡ bỏ event listener khi không cần thiết nữa
    document.removeEventListener("click", closeSearchOnOutsideClick);
  }
}