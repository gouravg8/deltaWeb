let day = 7,
  dayw = "monday";
switch (day) {
  case 1:
    dayw = "monday";
    break;
  case 2:
    dayw = "tuesday";
    break;
  case 3:
    dayw = "wednesday";
    break;
  case 4:
    dayw = "thursday";
    break;
  case 5:
    dayw = "friday";
    break;
  case 6:
    dayw = "saturdat";
    break;
  case 7:
    dayw = "sunday";
    break;
  default:
    dayw = "out of range";
    break;
}

console.log(`Day ${day} is ${dayw}`);
