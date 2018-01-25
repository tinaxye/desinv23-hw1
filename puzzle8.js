function repeat(direction, max) {
  var count = 0;
  while (count < max) {
    direction();
    count = count + 1;
  }
  right();
}

repeat(down, 8);
right();

repeat(up, 7);
right();

repeat(down, 7);
right();

repeat(up, 7);
right();

repeat(down, 7);
