  //Flags for checking status of NavBar and MorePortfolioItems
  var isNavBarExpanded = 0;
  //Variables for accessing the elements of the document
  var hamburgerMenuButton = document.getElementById("menuIcon");
  var navigationItems = document.getElementById("NavigationsItemsContainer");
  var navBar = document.getElementById("NavBar");
  if(screen.width <= 562)
    navigationItems.style.display = "none";
  //Function to expand and collapse the navigation bar
  function expandCollapseNavbar(){
    if(isNavBarExpanded == 0){
      isNavBarExpanded = 1;
      navigationItems.style.display = "block";
      navBar.style.backgroundColor = "black";
    } else {
      isNavBarExpanded = 0;
      navigationItems.style.display = "none";
      navBar.style.backgroundColor = "#000000d8";
    }
  }