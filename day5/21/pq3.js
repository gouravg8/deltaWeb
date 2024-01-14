// pq1(use splice and make final [july, june,march, august])
let start = ["january", "july", "march", "august"];

start.splice(0, 2, "july", "june");
console.log("start", start);

// pq2(return index of js from arr, if it was revered)
let techs = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
let indOfJs = techs.reverse().indexOf("javascript");
console.log(indOfJs);
