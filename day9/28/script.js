let h3rgb = document.querySelector("#h3rgb");
let btn = document.querySelector("#btn");
let divColorChange = document.querySelector(".divColorChange");

function changeColor() {
  let r = Math.floor(Math.random() * 255),
    g = Math.floor(Math.random() * 255),
    b = Math.floor(Math.random() * 255);
  h3rgb.textContent = `rgb(${r}, ${g}, ${b})`;
  divColorChange.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener("click", changeColor);
