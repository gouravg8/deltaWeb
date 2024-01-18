let form = document.querySelector("form");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let taskbox = document.querySelector(".tasks");
function handleSubmit() {
  console.log(inp.value);
  let li = document.createElement("li");
  li.textContent = inp.value;
  if (inp.value) taskbox.appendChild(li);
  else console.log('value to daal');
  inp.value = "";
  inp.focus = true;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", handleSubmit);
