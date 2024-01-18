// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.
let doubleAndReturnArgs = (arr, ...arg) => [...arr, ...arg.map((el) => el * 2)];
let arr = [1, 2, 3, 4, 5];
console.log(doubleAndReturnArgs(arr, 6, 7, 8, 9));
// }
// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object
let mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
let obj1 = {
  naam: "gourav soni",
  age: 21,
};
let obj2 = {
  naam2: "sourav soni",
  age2: 19,
};

console.log(mergeObjects(obj1, obj2));
