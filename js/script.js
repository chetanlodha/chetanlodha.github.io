var navBarElements = document.querySelector(".nav-elements");
var navHeader = document.querySelector(".nav-header-container");
var navBar = document.querySelector(".nav-content");
var container = document.querySelector(".container");

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav-container").style.top = "0";
  } else {
    document.querySelector(".nav-container").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

// get maximum height of navbar
var navBarExpandedHeight = navBarElements.clientHeight
// set container margins
container.style.marginTop = navHeader.clientHeight
//collapse the navbar by default
collapseNavBar()
// function for collapsing the navbar
function collapseNavBar(){
    navBarElements.style.height = "0px"
    isExpanded = false;
}
//function for expanding the navbar
function expandNavBar(){
    navBarElements.style.height = navBarExpandedHeight
    isExpanded = true;
}
//function to control the navbar state
function expandCollapseNavBar(){
    if(isExpanded)
        collapseNavBar();
    else
        expandNavBar();
}
