//stars in the night sky
//when you press the mouse, a yellow star will appear

function setup() {
  createCanvas(600, 600);
  background(51, 51, 153);
}

function draw() {
  // background(220);
}

function mousePressed() {
  fill(255, 255, 153);
  circle(mouseX, mouseY, 20);
}
