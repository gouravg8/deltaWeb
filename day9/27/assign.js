// Qsl. Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me'
let container = document.querySelector(".container");
let inp1 = document.createElement("input");
let btn1 = document.createElement("button");
btn1.textContent = "Click me";
container.append(inp1, btn1);
// Qs2. Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn'
inp1.placeholder = "username";
btn1.setAttribute("id", "btn");

// Qs3. Access the btn using the querySelector and button id. Change the button background
// color to blue and text color to white.
document
  .querySelector("#btn")
  .setAttribute("style", "backgound-color:blue; color:white");

// Qs4. Create an h1 element on the page and set its text to "DOM Practice" underlined.
// Change its color to purple.
let h1 = document.createElement("h1");
h1.textContent = "DOM Practice";
h1.style.color = "purple";
h1.style.textDecoration = 'underline'
// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold
let p = document.createElement("p");
p.textContent = "Apna College Delta Practice";

container.append(h1, p);