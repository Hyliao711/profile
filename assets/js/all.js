"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var menuBtn = document.querySelector(".menu-btn");
var dropDown = document.querySelector(".dropdown");
var menuItem = document.querySelectorAll(".menu-item");
menuBtn.addEventListener('click', function () {
  toggle();
});
menuItem.forEach(function (item) {
  item.addEventListener("click", function () {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle("open");
  dropDown.classList.toggle("open");
}
//# sourceMappingURL=all.js.map
