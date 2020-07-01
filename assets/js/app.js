function mobileMenuFunction() {
  var x = document.getElementById("mobile-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function hideMenuFunction() {
  var x = document.getElementById("mobile-menu");
  x.style.display = "none";
}
