function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10)
  //noLoop();
}

function draw() {
  background(220);
  for (let i = 0; i <= width; i = i + 40) {
    for (let j = 0; j <= height; j = j + 40) {
      //console.log(i);
      fill(0, 5 + i, 5*i,255);
      let size = random (10,40)
      circle(i, j, size);
    }
  }
}