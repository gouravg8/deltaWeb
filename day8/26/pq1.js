// max elem from array
let arr = [1, 24, 3, 4, 5, 12, 3, 0];
let max = arr.reduce((acc, curr) => (acc > curr ? acc : curr));
console.log("max num from arr", max);
console.log("way2:", Math.max(...arr));
// check if all numbers in array are multiples of 10 or not
let nums = [10, 20, 200, 230, 290];
let allMultiOf10 = nums.every((el) => el % 10 == 0);
console.log("are all mult of 10", allMultiOf10);

// find min number from the array
let min = arr.reduce((acc, curr) => (acc < curr ? acc : curr));
console.log("min num from arr", min);
console.log("way2:", Math.min(...arr));

// checking spread with string
let nm = "gourav soni";
console.log(...nm);

// spread => making multi elems form an arr or obj
// rest => making one from many vals

// my qs(from given array print winner, runnerup, and all the other players)
const players = ["gourav", "sourav", "anshul", "mummy", "papa"];
const [winner, runnerup, ...rest] = players;
console.log("winner", winner);
console.log("runnerup", runnerup);
console.log("all rest", ...rest);

// my obj destructuring
const student = {
  name: "gourav",
  age: 21,
  std: "bca",
  subjects: ["hindi", "english", "math", "science", "social"],
  username: "suar@gouravsoni.com",
  password: "pagalHaiTu",
};
const { username: user, password: pass, city: place = "New Delhi" } = student;
console.log(student, place);
