let navBarElements = document.querySelector(".nav-elements");
let navHeader = document.querySelector("nav");
let container = document.querySelector(".container");
let prevScrollpos = window.pageYOffset;
let isExpanded = false;
let prevWidth;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav-container").style.top = "0";
  } else {
    document.querySelector(".nav-container").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

window.onload = () => {
  if (window.outerWidth < 701) {
    collapseNavBar();
    onResize();
  }
  document.querySelectorAll('.nav-elements a li').forEach(node => node.addEventListener('click', () => collapseNavBar()))
}

function collapseNavBar() {
  navBarElements.style.height = "0px"
  isExpanded = false;
}
//function for expanding the navbar
function expandNavBar() {
  navBarElements.style.height = 144
  isExpanded = true;
}
//function to control the navbar state
function expandCollapseNavBar() {
  if (isExpanded)
    collapseNavBar();
  else
    expandNavBar();
}

const setDimensions = () => container.style.marginTop = navHeader.clientHeight;

const onResize = () => {
  let width = window.outerWidth
  setDimensions();
  if (prevWidth > 701)
    collapseNavBar();
  prevWidth = width;
}