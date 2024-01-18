const btn = document.querySelector("#btn-color");
const body = document.body;
const colors = [
  "#3498db",
  "#e74c3c",
  "#2ecc71",
  "#f39c12",
  "#9b59b6",
  "#1abc9c",
];

btn.addEventListener("click", function () {
  const randomColors = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randomColors;
});
