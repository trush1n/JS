function circleArea(circle) {
    return 3.14159265359 * circle.radius ** 2;
  }

  doTest(new Circle(new Point(10, 10), 30), 2827.433388)
  doTest(new Circle(new Point(25, -70), 30), 2827.433388)
  doTest(new Circle(new Point(-15, 5), 0), 0)
  doTest(new Circle(new Point(-15, 5), 12.5), 490.873852)