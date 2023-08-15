document.addEventListener('DOMContentLoaded', () => {
menu  = {"Home":"tableau.html",
"Hourly Past":"pages/past-hourly.html", 
"Monthly Past":"pages/past-monthly.html", 
"Demand prediction":"pages/prediction-demand.html", 
"Supply prediction":"pages/prediction-supply.html", 
"Price prediction":"pages/prediction-price.html", 

"Logout":"login.html",  }
navbar = document.getElementById('navbar').children[0]
navbar.innerHTML = ""

for (menuItem  in menu) {
  var anchor = document.createElement("a");
  anchor.href = window.location.hostname+"/"+menu[menuItem];
  anchor.textContent = menuItem ;
  navbar.appendChild(anchor);
}

});



