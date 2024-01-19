let allBoxes = document.querySelectorAll(".box");
let allColor = ["red", "yellow", "green", "blue"];
let computerChoices = [];
let myChoisesOfColor = [];
let level = 1;
let startGame = false;
let levelText = document.querySelector("#level");
let outerBox = document.querySelector(".outerBox");

function matchSequece() {
  if (myChoisesOfColor.length == computerChoices.length) {
    computerChoices.forEach((el, index) => {
      if (el != myChoisesOfColor[index]) {
        console.log("wrong");
        level = 0;
      }
    });
    level++;
    levelText.textContent = `level: ${level}`;
  } else {
    computerChoices.forEach((el, index) => {
      if (el != myChoisesOfColor[index]) {
        console.log("wrong");
        level = 0;
      }
    });
  }
}

outerBox.addEventListener("click", (e) => {
  e.stopPropagation();
  let btn = e.target.attributes.type.value;
  if (btn == "button") myChoisesOfColor.push(e.target.attributes.id.value);
  matchSequece();
  chooseAndStoreColors(e.target);
  console.log(computerChoices, myChoisesOfColor);
});

function buttonFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => btn.classList.remove("flash"), 1000);
}

function chooseAndStoreColors(btn) {
  let random = Math.floor(Math.random() * allColor.length);
  computerChoices.push(allBoxes[random].id);
  buttonFlash(btn);
  level++;
  levelText.textContent = `level: ${level}`;
}
let checkStart = () => {
  if (!startGame) {
    console.log("game started");
    startGame = true;
    chooseAndStoreColors();
  }
};
document.addEventListener("keyup", checkStart);
