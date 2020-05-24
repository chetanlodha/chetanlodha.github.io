  var isPortfolioExpanded = 1;
  var expandButton = document.getElementById("ExpandButton");
  var morePortfolioItems = document.getElementById("MorePortfolioItems");
  /*get the style.display of MorePortfolioItems to dynamically set the style according to the browser
  "flex" for firefox and "inline-block" for chrome*/
  var style = getComputedStyle(morePortfolioItems);
  var portfolioDisplayStyle = style.display;
  expandButton.style.transform="rotate(0.5turn)";
  expandPortfolioItems();
  //Fuction to expand and collapse MorePortfolioItems section
  function expandPortfolioItems(){
    if(isPortfolioExpanded == 1){
      expandButton.style.transform="rotate(0turn)"; 
      isPortfolioExpanded = 0;
      morePortfolioItems.style.display = "none";
    }
    else{
      expandButton.style.transform="rotate(0.5turn)"; 
      isPortfolioExpanded = 1;
      morePortfolioItems.style.display = portfolioDisplayStyle;
    }   
  }

  