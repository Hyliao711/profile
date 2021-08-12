"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var menuBtn = document.querySelector('.menu-btn');
var dropDown = document.querySelector('.dropdown');
menuBtn.addEventListener('click', function () {
  // if(!menuOpen) {
  //   menuBtn.classList.add('open');
  //   dropDown.classList.add('open');
  //   menuOpen = true;
  // } else {
  //   menuBtn.classList.remove('open');
  //   menuOpen = false;
  // }
  menuBtn.classList.toggle('open');
  dropDown.classList.toggle('open');
});
//# sourceMappingURL=all.js.map
