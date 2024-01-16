// Qs1. Write a JavaScript function that returns array elements larger than a number.
const largerThanNum = (n, arr) => {
  let largers = arr.filter((elem) => elem > n);
  console.log(largers);
};
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// largerThanNum(4, arr);

// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”
const uniqueChars = (arr) => {
  let char = arr.split("");
  let set = new Set(char);
  let out = "";
  for (const it of set) {
    out += it;
  }
  console.log(out);
};
uniqueChars("abcdabcdefghhh");
// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"
const countries = ["Australia", "Germany", "United States of America"];
const largestCountry = (countries) =>
  countries.sort((a, b) => b.length - a.length)[0];
console.log(largestCountry(countries));
// Qs4. Write a JavaScript function to count the number of vowels in a String
// argument.
const str = "gourav soni";
const countVowels = (str) => {
  let count = 0,
    regex = new RegExp("[aeiou]", "gi");
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(regex)) count++;
  }
  console.log(count);
};
countVowels(str);

// Qs5. Write a JavaScript function to generate a random number within a range
// (start, end)
let randomInRange = (start, end) =>
  Math.floor(Math.random() * (end - start + 1) + start);
console.log(randomInRange(-93, 100));
