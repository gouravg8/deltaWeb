let form = document.querySelector("form");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let taskbox = document.querySelector(".tasks");
function handleSubmit() {
  console.log(inp.value);
  let li = document.createElement("li");
  li.textContent = inp.value;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  li.appendChild(deleteBtn);

  if (inp.value) taskbox.appendChild(li);
  else console.warn("value to daal");
  inp.value = "";
  inp.focus = true;

  //   deleteBtn.onclick = (e) => {
  //     e.target.parentElement.remove();
  //   };
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", handleSubmit);

let ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  //   e.target.parentElement.remove();
  if (e.target.nodeName == "BUTTON") {
    e.target.parentElement.remove();
  }
});
