// Practice Qs
// Add the following elements to the container using only JavaScript and the DOM methods.
let container = document.querySelector(".container");

// i) a <p> with red text that says "Hey I'm red!"
let pred = document.createElement("p");
pred.textContent = "Hey I'm red";
pred.style.color = "red";

// ii) an <h3> with blue text that says "I'm a blue h3!"
let hblue = document.createElement("h3");
hblue.textContent = "I'm a blue h2!";
hblue.style.color = "blue";

// iii) a <div> with a black border and pink background color with the following elements inside of it:
let divBlackBorder = document.createElement("div");
divBlackBorder.setAttribute(
  "style",
  "border: 2px solid black; background-color:pink;"
);

// • another <h1> that says "I'm in a div"
let hdiv = document.createElement("h1");
hdiv.textContent = "I'm in a div";

// • a <p> that says "ME TOO!"
let pdiv = document.createElement("p");
pdiv.textContent = "ME TOO!";

divBlackBorder.appendChild(hdiv);
divBlackBorder.appendChild(pdiv);

// container.appendChild(pred);
// container.appendChild(hblue);
// container.appendChild(divBlackBorder);
container.append(pred, hblue, divBlackBorder);
console.log(container.children);
