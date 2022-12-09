//squares with a color gradient (my favorite colors)
//changing sizes

function setup() {
  createCanvas(600, 600);
  frameRate(7)
  //noLoop();
}

function draw() {
  background(220);
  for (let i = 0; i <= width; i = i + 50) {
    for (let j = 0; j <= height; j = j + 50) {
      //console.log(i);
      fill(200, 5 + i, 5*i,100);
      let size = random (5,50)
      square(i, j, size);
    }
  }
}