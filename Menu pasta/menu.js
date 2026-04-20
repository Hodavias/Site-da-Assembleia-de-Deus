document.addEventListener("DOMContentLoaded", () => {
  fetch("menu.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("menu").innerHTML = data;
    });
});