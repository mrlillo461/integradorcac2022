// let menu = document.querySelector(".menu-movil");
// menu.addEventListener("click", function () {
//   menu.classList.toggle("click");
// });

const header = document.querySelector("header");
const buyTicketsContainer = document.querySelector(".buy-tickets");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", scrollY > 0);
  buyTicketsContainer.classList.toggle("scroll", scrollY > 0);
});

const btnTickets = document.querySelector(".button-tickets");

btnTickets.addEventListener("click", () => {
  buyTicketsContainer.classList.add("open-buy-tickets");
});

buyTicketsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("buy-tickets"))
    buyTicketsContainer.classList.remove("open-buy-tickets");
});

// const select = document.querySelector(".category");

// const mostrar = () => {
//   const indice = select.selectedIndex;
//   indice == 0
//     ? select.classList.add("disabled")
//     : select.classList.remove("disabled");
//   const opcionSeleccionada = select.options[indice];
//   console.log(`Texto: ${indice}. Valor: ${opcionSeleccionada.value}`);
// };

// function click() {
//   if ((indice = 0)) {
//   }
// }

// select.addEventListener("change", mostrar);

// let optCategory = document.querySelector("option[selected]");

// optCategory.textContent == "Categoría"
//   ?
//   : console.log("Nadila");

// function stopDefaultAction(event) {
//   event.preventDefault();
// }
