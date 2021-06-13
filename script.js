// Selection of HTML objects
const burger = document.querySelector(".burgerProxy");
const sidemenu = document.querySelector(".sidemenu");
const sidemenuLink = document.querySelectorAll(".sidemenu ul li a");

// Defining a function
function toggleMenu() {
  burger.classList.toggle("active");
  sidemenu.classList.toggle("active");
}



burger.addEventListener("click", toggleMenu);

