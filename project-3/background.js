function setup() {
  createCanvas(1400, windowHeight);
  background(211, 246, 253);
noStroke();
  circle(mouseX, mouseY, 30);
  fill( random(0,255), random(0,255), random(0,255) )
  bgColor = color( random(255), random(255), random(255) );
}

function draw() {
  
   if ((keyIsPressed === true) && (key === 'z')) {
  background('black');
  }
  if((keyIsPressed === true) && (key === 'q')) {
    background(211, 246, 253);
  }
  
  if ((mouseIsPressed) && (mouseX > 200) && (mouseX < 800)) {
    //stroke(255);
  circle(mouseX, mouseY, 30);
    fill( random(0,255), random(0,255), random(0,255) )
  
  } 
  if((mouseIsPressed) && (mouseX < 200)){
  
  square(mouseX, mouseY,10) 
    fill (random(0,255), random(0,255), random(0,255));
  }
  
    if((mouseIsPressed) && (mouseX > 800)){

  square(mouseX, mouseY, 100) 
    fill (random(0,255), random(0,255), random(0,255));
  }
 
}