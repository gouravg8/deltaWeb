let returnSq = (n) => n * n;
console.log(returnSq(100));

let dura = 2000;

let hello = setInterval(() => {
  console.log("Hello world");
}, dura);

setTimeout(() => {
  clearInterval(hello);
}, dura * 6);
