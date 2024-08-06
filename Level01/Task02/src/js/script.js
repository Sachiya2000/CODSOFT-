var tablinks = document.getElementsByClassName("tabLinks");
var tabcontents = document.getElementsByClassName("tab-content");

function opentTab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-Link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-Link");
    document.getElementById(tabname).classList.add("active-tab");

    
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}       

/** form reset button */

function reset(){
    document.getElementById("myForm").reset();
}

/** full display my work */

const seeMoreBtn = document.getElementById ('seeMoreBtn');
const hiddenContents = document.querySelectorAll ('#work-display-list');

seeMoreBtn.addEventListener ('click', function () {
  hiddenContents.forEach (function (hiddenContent) {
    if (
      hiddenContent.style.display === 'none' ||
      hiddenContent.style.display === ''
    ) {
      hiddenContent.style.display = 'block';
    } else {
      hiddenContent.style.display = 'none';
    }
  });

    seeMoreBtn.textContent = seeMoreBtn.textContent === 'See Less' ? 'See More' : 'See Less';
  });


  // section animation
 
