// pq1(0-n elemes from arr)
let arr = [7, 9, 0, -2];
let n = 3;
let newArr = [];
for (let i = 0; i < n; i++) {
  newArr.push(arr[i]);
}
console.log(newArr);

// pq2(arr.len - n elems from arr)
let newArr2 = [];
for (let i = arr.length - n; i < arr.length; i++) {
  newArr2.push(arr[i]);
}
console.log(newArr2);

// pq3
let str = "d";
if (str === "") console.log("blank");
else console.log("not blank");

// pq4(check el at index is lower or not)
let str2 = "Gourav soni";
let index = 3;
let lowerCaseOfIndex = str2.charAt(index).toLowerCase();

if (str2[index] === lowerCaseOfIndex) {
  console.log("lower");
} else {
  console.log("not lower");
}

// pq6
let arr2 = ["a", "b", "c", "d", "e"];
let findEl = "x";
let out = arr2.includes(findEl) ? true : false;
console.log(out);
