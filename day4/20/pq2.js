let popcornSize = "L";
let price = 0;
switch (popcornSize) {
  case "XL":
    price = 250;
    break;
  case "L":
    price = 200;
    break;
  case "M":
    price = 100;
    break;
  case "S":
    price = 50;
    break;
  default:
    price = 0;
    break;
}
console.log("for " + popcornSize + " price is: Rs." + price);
