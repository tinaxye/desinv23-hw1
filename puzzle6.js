function repeat(direction, max) {
  var count = 0;
  while (count < max) {
    direction();
    count = count + 1;
  }
}

right();
var firstColor = getColor();

if (firstColor == "blue") {
  repeat(down, 3);
} else {
  repeat(up, 3);
}

if (getColor() == "blue") {
  right();
} else {
  left();
}

if (firstColor == "blue") {
  down();
} else {
  up();
}
