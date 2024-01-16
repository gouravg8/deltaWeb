// video1(write a poem through function)
function poem() {
  console.log("twinkle twinkle little star");
  console.log("how are you wonder what you are");
}
poem();

// video2(print the outcome of dice roll)
function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}
console.log(rollDice());

// video3(avarage of three numbers from the funciton)
function avgOfThreeNums(...params) {
  const sum = params.reduce((a, b) => a + b);
  const avg = sum / params.length;
  console.log(Math.round(avg));
}
avgOfThreeNums(5, 15, 20);

// video4(print the multiplication table via function)
function multiplicationTable(n) {
  let i = 1;
  while (i <= 10) {
    console.log(`${n} x ${i} = ${n * i}`);
    i++;
  }
}
multiplicationTable(73);

// video5(sum of numbers from 1 to n)
function sumTillN(n) {
  let i = 1,
    sum = 0;
  while (i <= n) {
    sum += i;
    i++;
  }
  console.log(sum);
}
sumTillN(15);

// video6(concatination of all string from an array)
function concArr(arr) {
  let conc = arr.reduce((a, b) => a + " " + b, "");
  console.log(conc);
}
let arr = [
  "Hii",
  "i",
  "am",
  "gourav",
  "soni",
  "and",
  "i",
  "am",
  "learning",
  "mern",
  "from",
  "delta",
  "batch",
];
concArr(arr);

// video7(what will be output)
let greet = "hello";
function changeGreet() {
  let greet = "namaste";
  console.log(greet);
  function innerGreen() {
    console.log(greet);
  }
}
console.log(greet);
changeGreet();
