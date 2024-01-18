// JS (P ar t 10)
// Practice Ques tions
// Qs1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load
// [Use MDN for help]

// * answer is down here
// document.querySelector(".container").onclick = (e) => console.log(e.target.innerText);
// window.onkeydown = (e) => console.log(e.key);
// window.onscroll = (e) => console.log(e);
// window.onload = (e) => console.log('hii');
// * here is answer above

let container = document.querySelector(".container");
// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.
let newBtn = document.createElement("button");
newBtn.textContent = "change my bg";
newBtn.onclick = () => (newBtn.style.backgroundColor = "green");
container.append(newBtn);

// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]
let inp = document.createElement("input");
inp.placeholder = "enter your name";
let h2 = document.createElement("h2");
h2.textContent = "";

let br = document.createElement("br");

container.append(br, inp, h2);

inp.oninput = (e) => {
  let regex = new RegExp(/^[a-zA-Z ]+$/);
  if (e.target.value.match(regex)) {
    h2.textContent = inp.value;
  } else {
    console.warn(
      "only english characters are allowed, please nonenglish letters",
      new Date().getTime()
    );
  }
};
