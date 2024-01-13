// q1
let str = "again";
let outMsg = "";
if (str[0] === "a" && str.length > 3) {
  outMsg = "good";
} else {
  outMsg = "bad";
}
console.log(str + ' is "' + outMsg + '" String.');

// q2
let num = 12;
if ((num % 3 === 0 && num + 1 == 15) || num - 1 == 11) {
  console.log("safe");
} else {
  console.log("unsafe");
}
