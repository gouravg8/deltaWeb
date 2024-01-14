// pq1
let start = ["january", "july", "march", "august"];
// way 1(shorting in non accending order)
// console.log(start.sort((a, b) => a - b));

// way2(dooing the final thing)
let jan = start.shift();
let jul = start.shift();
start.unshift("june");
start.unshift(jul);
console.log(start);
