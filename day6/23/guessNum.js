// function guessNum() {
//   let max = 50;
//   let randNum = Math.floor(Math.random() * max + 1);

//   let life = 5;
//   console.log(randNum);
//   while (life >= 0) {
//     life--;
//   }
// }
// guessNum();


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
