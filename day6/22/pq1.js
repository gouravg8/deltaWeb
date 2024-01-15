// pq1(arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3)
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
let resultArr = arr.splice(
  arr.find((num) => num),
  1
);
console.log(arr);

// pq2(find num of digit in a number)
let num2 = 2871994;
console.log("len of num", num2.toString().length);
console.log("len of num", Math.floor(Math.log10(num2) + 1));

// pq3(find sum of digits of num2)
let sum = num2
  .toString()
  .split("")
  .reduce((a, b) => +a + +b);
console.log(sum);

// pq4(find factorial of n)
let n = 7;
function facto(n) {
  if (n <= 1) return 1;
  return n * facto(n - 1);
}
let ans = facto(n);
console.log(ans);

// pq5(largest num from arr of only +ve nums)
let large = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > large) large = arr[i];
}
console.log(large);
