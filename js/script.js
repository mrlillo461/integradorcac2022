// let menu = document.querySelector(".menu-movil");
// menu.addEventListener("click", function () {
//   menu.classList.toggle("click");
// });

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", scrollY > 0);
});

let btnTickets = document.querySelector(".btn-tickets");
let buyTickets = document.querySelector(".buy-tickets");

btnTickets.addEventListener("click", function () {
  console.log(buyTickets);
  buyTickets.classList.add("open-buy-tickets");
});

// function stopDefaultAction(event) {
//   event.preventDefault();
// }
