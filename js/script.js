// let menu = document.querySelector(".menu-movil");
// menu.addEventListener("click", function () {
//   menu.classList.toggle("click");
// });

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", scrollY > 0);
});

// function stopDefaultAction(event) {
//   event.preventDefault();
// }
