let color = "yellow";
let outmsg = "";
if (color === "red") {
  outmsg = "stop";
} else if (color === "yellow") {
  outmsg = "slow down";
} else if (color === "green") {
  outmsg = "go";
} else {
  outmsg = "wrong signal";
}
console.log(outmsg + ", signal is: " + color);
