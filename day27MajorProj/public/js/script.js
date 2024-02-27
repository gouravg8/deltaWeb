let showTax = document.getElementById("showTax");
let price = document.querySelectorAll(".price");

showTax.addEventListener("click", () => {
  if (!showTax.checked) {
    for (const pr of price) {
      pr.style.display = "none";
    }
  } else {
    for (const pr of price) {
      pr.style.display = "inline";
    }
  }
});
