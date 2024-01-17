// Qs1 . Write an arrow function named arrayAverage that accepts an array of numbers
// and returns the average of those numbers.
let arrayAverage = (arr) => arr.reduce((a, b) => a + b) / arr.length;
let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(arr));

// Qs2. Write an arrow function named isEven() that takes a single number as argument
// and returns if it is even or not.
let evenOrOdd = (n) => n & 1;
console.log(evenOrOdd(12));

// Qs3. What is the output of the following code .
const object = {
  message: "Hello, World!",
  logMessage() {
    console.log(this.message);
  },
};
setTimeout(object.logMessage, 1000);

// Qs4.  what is the output of the following code:
let length = 4;
function callback() {
  console.log(this.length);
}
const obj = {
  length: 5,
  method: function(callback) {
    callback();
  },
};
obj.method(callback)
