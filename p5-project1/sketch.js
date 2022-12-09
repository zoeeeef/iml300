let rainSound, analyzer;

function preload() {
	rainSound = loadSound('zapsplat_nature_rain_approaching_thunderstorm.mp3');
  waterScapes = loadImage ('Waterscapes.png')
}

function setup() {
	createCanvas(500,500);
	background(waterScapes);
    fill(200);
    // text('Tap to toggle the sound and visual', 50, 50);
    // text('Move your cursor to draw ripples', 50, 70);
    //rainSound.loop(); 
  
    // music visualizer
   analyzer = new p5.Amplitude();
}

function draw() { 
  //stroke(random(200), random(200),255);
  // noFill();
  noStroke();
  fill(random(204), random(204),255,10);
  strokeWeight(0.3);
  
  let vol = analyzer.getLevel();
  let size = map(vol, 0, 1, 0, height*5);// size is based on current volume level
  //rectMode(CENTER);
  circle(width/2, height/2, size);
  //circle(width/3, height/3, size);
  //circle(width/4, height/4, size);
  //circle (width/6, height/6, size);
  //triangle(500, 0, 600, 0, 150, size);
  //triangle(100, 0, 200, 0, 550, size);
  //triangle(0, 500, 0, 600, 150, size);
  //triangle(0, 100, 0, 200, 550, size);
  //circle(width/10, height/5, size);
  //circle(width/5, height/5,size);
  //circle(width/5, height/10, size);
  circle(width/2, height, size);
  //circle(height, width/2, size);
  circle(width/2,420,size);
  circle(width/2,120,size);
  //triangle(-500, 0, -600, 0, -150, size);
  //triangle(-100,0,-200,0,-550,size);
  //triangle(0, -500, 0, -600, 0, size);
  //triangle(0,-100,0,-200,0,size);
}

function mousePressed() {
  if (rainSound.isPlaying() ){
    rainSound.stop();
  } else {   
    rainSound.play();
  }
}