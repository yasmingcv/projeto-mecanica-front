'use strict'

const navBars = document.getElementById('mySidebar');

function w3_open() {
    navBars.getElementById("mySidebar").style.display = "block";
}
  
function w3_close() {
    navBars.getElementById("mySidebar").style.display = "none";
}




navBars.addEventListener('click',w3_open)

navBars.addEventListener('click',w3_close)