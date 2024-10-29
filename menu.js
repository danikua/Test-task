"use strict";

document.addEventListener("click", documentClick);

function documentClick(e) {
  const tartgetItem = e.target;
  if (tartgetItem.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
  }
}
