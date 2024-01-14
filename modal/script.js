const refButton = document.querySelector(".ref-button");
const subList = document.querySelector(".references-ul");

refButton.addEventListener("click", function (event) {
  subList.classList.toggle("hidden");
});
