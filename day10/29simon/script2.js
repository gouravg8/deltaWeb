let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "blue"];
let started = false;
let level = 0;
let allBtns = document.querySelectorAll(".box");
let highestScore = 0;

let h2 = document.querySelector("#level");
start();
function start() {
  document.querySelector("#highScore").textContent =
    localStorage.getItem("highScore");

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
  if (level > highestScore) highestScore = level;
  localStorage.setItem("highScore", highestScore);
  h2.innerHTML = `Press any key to start <br> your score was: ${level}`;

  userSeq = [];
  gameSeq = [];
  level = 0;
  started = false;
  document.body.classList.add("gameOver");
  setTimeout(() => {
    document.body.classList.remove("gameOver");
  }, 500);
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

for (const btn of allBtns) {
  btn.addEventListener("click", btnPressed);
}
