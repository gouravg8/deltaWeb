// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.
let arr = [1, 2, 3, 4, 5, 6];
let sqArr = arr.map((el) => el * el);
let sum = sqArr.reduce((acc, curr) => acc + curr);
let avg = sum / arr.length;
console.log("sq+sum+avg", Math.floor(avg));

// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.
let newArr = arr.map((el) => el + 5);
console.log(newArr);

// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.
let strArr = ["gouav", "sourav", "anshul"];
let uppStrArr = strArr.map((el) => el.toUpperCase());
console.log(uppStrArr);

