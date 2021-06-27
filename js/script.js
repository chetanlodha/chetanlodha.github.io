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
  if (window.innerWidth < 768) {
    collapseNavBar();
    onResize();
  }
  document.querySelectorAll('.nav-elements li').forEach(node => node.addEventListener('click', () => collapseNavBar()))
  setTimeout(() => {
    document.querySelector('.PortfolioItemsContainer').innerHTML = `
      <div class="PortfolioItem" style="--order: 1">
          <a href="https://drive.google.com/drive/folders/1paStYMrNJu-yhWok5ormK3XqnUP3ue1Q?usp=sharing"
              target="_blank" rel="noreferrer">
              <div class="PortfolioItemSpanContainer">
                  <span class="PortfolioItemTextHeading">Sharehere</span>
                  <span class="PortfolioItemTextSubHeading">jQuery</span>
              </div>
          </a>
      </div>
      <div class="PortfolioItem" style="--order: 2">
          <a href="https://chetan-notes.netlify.app" target="_blank" rel="noreferrer">
              <div class="PortfolioItemSpanContainer">
                  <span class="PortfolioItemTextHeading">Quick Notes</span>
                  <span class="PortfolioItemTextSubHeading">MERN</span>
              </div>
          </a>
      </div>
      <div class="PortfolioItem" style="--order: 3">
          <a href="https://chetan-todo.netlify.app" target="_blank" rel="noreferrer">
              <div class="PortfolioItemSpanContainer">
                  <span class="PortfolioItemTextHeading">Todo List</span>
                  <span class="PortfolioItemTextSubHeading">React-Redux</span>
              </div>
          </a>
      </div>
      <div class="PortfolioItem" style="--order: 4">
          <a href="#">
              <div class="PortfolioItemSpanContainer">
                  <span class="PortfolioItemTextHeading">Portfolio</span>
                  <span class="PortfolioItemTextSubHeading">HTML-CSS</span>
              </div>
          </a>
      </div>
      <div class="PortfolioItem" style="--order: 5">
          <a href="https://play.google.com/store/apps/details?id=substratum.theme.ice" target="_blank"
              rel="noreferrer">
              <div class="PortfolioItemSpanContainer">
                  <span class="PortfolioItemTextHeading">Ice Substratum Theme</span>
                  <span class="PortfolioItemTextSubHeading">Android</span>
              </div>
          </a>
      </div>
      <div class="PortfolioItem" style="--order: 6">
          <a href="https://play.google.com/store/apps/details?id=substratum.xperia.lockscreens"
              target="_blank" rel="noreferrer">
              <div class="PortfolioItemSpanContainer">
                  <span class="PortfolioItemTextHeading">Xperia Lockscreen Clock</span>
                  <span class="PortfolioItemTextSubHeading">Android</span>
              </div>
          </a>
      </div>`;
  }, 2000)
}

function collapseNavBar() {
  navBarElements.style.height = "0px"
  isExpanded = false;
}
//function for expanding the navbar
function expandNavBar() {
  navBarElements.style.height = "144px"
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
  if (prevWidth < 768)
    collapseNavBar();
  prevWidth = width;
}
