function moveThroughObstacle() {
  right();
  right();
  if (getColor() == "blue") {
    down();
  } else {
    up();
  }
}

function repeat(direction, max) {
  var count = 0;
  while (count < max) {
    direction();
    count = count + 1;
  }
}

var count = 0;
while (count < 3) {
  moveThroughObstacle();
  count = count + 1;
}
repeat(right, 3);
