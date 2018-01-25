function repeatSetColor(direction, color, max) {
  var count = 0;
  while (count < max) {
    direction();
    setColor(color);
    count = count + 1;
  }
}

repeatSetColor(down, "red", 50);
repeatSetColor(right, "yellow", 90);
repeatSetColor(up, "green", 50);
repeatSetColor(left, "blue", 90);
