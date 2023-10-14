let menu = document.getElementById("navMobile");
let btnMenu = document.getElementById("btnMenu");

function menuDisplay() {
  menu.classList.toggle("hidden");
  btnMenu.classList.toggle("fa-bounce");
  btnMenu.classList.toggle("fa-times");
}
