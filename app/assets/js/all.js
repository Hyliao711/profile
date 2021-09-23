$(function() {
  console.log('Hello Bootstrap5');
});

const menuBtn = document.querySelector(".menu-btn");
const dropDown = document.querySelector(".dropdown");
const menuItem = document.querySelectorAll(".menu-item");

menuBtn.addEventListener('click', () => {
  toggle();
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle("open");
  dropDown.classList.toggle("open");
}