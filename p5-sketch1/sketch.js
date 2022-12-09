var eyeX;
var eyeY;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(220);

  //head
  fill("white");
  ellipse(350, 350, 350, 350);

  //eye1
  stroke("black");
  strokeWeight(2);
  fill("white");
  ellipse(275, 290, 70, 70);

  //eye2
  ellipse(425, 290, 70, 70);

  //smile
  fill("white");
  stroke("black");
  strokeWeight(2);
  arc(350, 400, 175, 175, 0, PI + TWO_PI, CHORD);

  //teeth
  stroke("black");
  strokeWeight(2);
  line(310, 400, 310, 477);
  line(350, 400, 350, 486);
  line(390, 400, 390, 477);
  line(272, 440, 429, 440);

  //nose
  fill("red");
  noStroke();
  ellipse(350, 365, 60, 60);

  //eyeXeyeY
  eyeX = map(mouseX, 0, width, 170 - 20, 170 + 20);
  eyeY = map(mouseY, 0, height, 180, 250);
  fill("black");
  ellipse(eyeX + 130, eyeY + 100, 40, 40);
  ellipse(eyeX + 260, eyeY + 100, 40, 40);

  //hairleft
  //hairclump1
  fill(mouseX, mouseY, 37);
  noStroke();
  ellipse(203, 203, 90, 90);
  //hairclump2
  ellipse(240, 180, 90, 90);
  //hairclump3
  ellipse(200, 170, 90, 90);

  //hairright
  //hairclump4
  ellipse(460, 175, 90, 90);
  //hairclump5
  ellipse(500, 212, 90, 90);
  //hairclump6
  ellipse(500, 160, 90, 90);
}
