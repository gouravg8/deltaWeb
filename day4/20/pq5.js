// pq1
let num = 120;
let goodOrBad = num % 10 === 0 ? "good" : "bad";
console.log(`${num} is ${goodOrBad}`);

// pq2
// let uname = prompt("enter your name: ");
// let age = prompt("enter your age: ");
// console.log(`${uname} is ${age} years old.`);

// pq3
let quater = 4;
let quaterMonths = "";
switch (quater) {
  case 1:
    quaterMonths = "January, February, March";
    break;
  case 2:
    quaterMonths = "April, May, June";
    break;
  case 3:
    quaterMonths = "July, August, September";
    break;
  case 4:
    quaterMonths = "October, November, December";
    break;

  default:
    quaterMonths = "Quater is not in range";
    break;
}
console.log(`Months in Quater ${quater} : ${quaterMonths}`);

// pq4
let str = "Apna college";
let goldenStr =
  (str.startsWith("A") || str.startsWith("a")) && str.length >= 5
    ? "golden"
    : "not golden";
console.log(str, "is", goldenStr);

// pq5
let a = 3,
  b = 5,
  c = 1;
let ans = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(ans);

// pq6
let fnum = 32,
  lnum = 34233;
let sameEnd = fnum % 10 === lnum % 10 ? true : false;
console.log(sameEnd);
