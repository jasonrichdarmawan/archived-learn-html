/* accordion */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function panelMaxHeight(id) {
  var parent = document.getElementById(`${id}`);
  var panel = parent.nextElementSibling;
  console.log(panel.style.maxHeight)
  if (panel.style.maxHeight == 0) {
    parent.classList.toggle("active");
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

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
