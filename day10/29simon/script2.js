let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "blue"];
let started = false;
let level = 0;

let h2 = document.querySelector("#level");
start();
function start() {
  document.addEventListener("keyup", function () {
    if (!started) {
      console.log("start ho gya");
      started = true;
      levelUp();
    }
  });
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
  //   console.log(btn);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 250);
  //   console.log(btn);
}

function resetGame() {
  userSeq = [];
  gameSeq = [];
  level = 0;
  h2.textContent = "press any key to start";
}

function levelUp() {
  userSeq = [];
  level++;
  h2.textContent = `Level: ${level}`;
  // random btn choose
  let random = Math.floor(Math.random() * btns.length);
  let randColor = btns[random];
  let buttonChoosed = document.querySelector(`#${randColor}`);
  gameSeq.push(randColor);
  //   console.log(random, randColor, buttonChoosed);
  btnFlash(buttonChoosed);
}

function checkSeq(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    console.log("true");
    if (userSeq.length == gameSeq.length) {
      setTimeout(() => {
        levelUp();
      }, 1000);
    }
  } else {
    h2.textContent = "Game over";
    console.error("Game over");
    level = 0;
    resetGame();
    start();
  }
}

function btnPressed() {
  let btn = this;
  userFlash(btn);

  userSeq.push(this.getAttribute("id"));
  console.log(gameSeq, userSeq);

  checkSeq(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".box");
for (const btn of allBtns) {
  btn.addEventListener("click", btnPressed);
}
