function repeat(direction, max) {
  var count = 0;
  while (count < max) {
    direction();
    count = count + 1;
  }
}

function changeAndCollect() {
  right();
  var myColor = getColor();
  down();
  setColor(myColor);
  repeat(right, 2);
}

repeat(down, 4);
changeAndCollect();
up();
changeAndCollect();
