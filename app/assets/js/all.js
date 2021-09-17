$(function() {
  console.log('Hello Bootstrap5');
});

const menuBtn = document.querySelector('.menu-btn');
const dropDown = document.querySelector('.dropdown');

menuBtn.addEventListener('click', () => {
  // if(!menuOpen) {
  //   menuBtn.classList.add('open');
  //   dropDown.classList.add('open');
  //   menuOpen = true;
  // } else {
  //   menuBtn.classList.remove('open');
  //   menuOpen = false;
  // }
  menuBtn.classList.toggle('open');
  dropDown.classList.toggle('open')
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
