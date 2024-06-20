ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.p');

var collapsibleMenu = document.getElementsByClassName("collapsible");
var collapsibleMenuPage;

for (collapsibleMenuPage = 0; collapsibleMenuPage < collapsibleMenu.length; collapsibleMenuPage++) {
  collapsibleMenu[collapsibleMenuPage].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
