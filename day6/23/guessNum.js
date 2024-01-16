function guessNum() {
  const range = prompt("input the number for range");
  let life = 5;
  const randomNum = Math.floor(Math.random() * range + 1);

  let guessedNo = prompt("guess the number");
  while (life > 0) {
    console.log(range, life, randomNum, guessedNo);
    if (randomNum == guessedNo) {
      alert("You win, number was", guessedNo);
      break;
    } else if (randomNum > guessedNo) {
      alert("Hint: think big");
      life--;
      guessedNo = prompt("guess the number");
    } else if (randomNum < guessedNo) {
      alert("Hint: think small");
      life--;
      guessedNo = prompt("guess the number");
    } else {
      life--;
      guessedNo = prompt("You are wrong, try again");
    }
  }
  if (life == 0) alert("you loose");
}
guessNum();
