function repeat(direction, max) {
  var count = 0;
  while (count < max) {
    direction();
    count = count + 1;
  }
}

repeat(down, 2);
var myColor = getColor();
repeat(down, 3);
repeat(right, 2);
setColor(myColor);
repeat(right, 2);
up();
