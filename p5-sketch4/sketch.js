let mySong;
let font1;
let font2;
let font3;
let font4;
let font5;
let yellowFlowers;
let yellowPaint;
let yellowGirl;
let yellowPatio;
let yellowCamera;
let yellowEmojis1;
let yellowEmojis2;
let yellowEmojis3;
let yellowCatepillar;
let yellowStars;
let yellowButterflies;

function preload() {
  mySong = loadSound("my audio yellw.mp3");
  font1 = loadFont("ScholarlyAmbitionRegular-PKdwB.ttf");
  font2 = loadFont('BetterGrade-519DV.ttf');
  font3 = loadFont('GlossySheenRegular-L35oy.ttf');
  font4 = loadFont('Arthemis-PKY27.ttf');
  font5 = loadFont('GrannyRegular-ALYgg.ttf')
  yellowFlowers = loadImage("yellow1.jpg");
  yellowPaint = loadImage("yellow2.jpg");
  yellowGirl = loadImage("yellow3.jpg");
  yellowPatio = loadImage("yellow4.jpg");
  yellowCamera = loadImage("yellow7.jpg");
  yellowEmojis1 = loadImage("yellowEmojis1.png");
  yellowEmojis2 = loadImage("yellowEmojis2.png");
  yellowEmojis3 = loadImage("yellowEmojis3.png");
  yellowCaterpillar = loadImage("caterpillar.png");
  yellowStars = loadImage("stars1.png");
  yellowButterflies = loadImage("butterflies.png");
}

function setup() {
  createCanvas(500, 500);
  frameRate(5);
  mySong.loop();
  //analyzer = new p5.Amplitude();
}

function draw() {
  background(252,250,206);
  //background(246,246,128);

  if (mySong.currentTime() < 0.75) {
    noStroke();
    textFont(font1, [50]);
    text("and it was all", 100, 250);
    fill("orange");
  } else if (mySong.currentTime() < 1.25) {
    background(246, 246, 128);
    noStroke();
    textFont(font1, [50]);
    text("YELLOW", 175, 250);
    fill("white");
  } else if (mySong.currentTime() > 2.25 && mySong.currentTime() < 2.5) {
    background(247, 247, 194);
    imageMode(CENTER);
    image(yellowFlowers, 150, 150);
  } else if (mySong.currentTime() > 2.5 && mySong.currentTime() < 2.75) {
    background(247, 247, 194);
    image(yellowPaint, 200, 200);
  } else if (mySong.currentTime() > 2.75 && mySong.currentTime() < 3) {
    background(247, 247, 194);
    image(yellowGirl, 250, 250);
  } else if (mySong.currentTime() > 3 && mySong.currentTime() < 3.25) {
    background(247, 247, 194);
    image(yellowPatio, 300, 300);
  } else if (mySong.currentTime() > 3.25 && mySong.currentTime() < 3.5) {
    background(247, 247, 194);
    image(yellowCamera, 330, 330);
  } else if (mySong.currentTime() > 3.5 && mySong.currentTime() < 3.75) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    //let vol = analyzer.getLevel();
    //let size = map(vol, 0, 1, 0, height*5);
    circle(width / 2, height / 2, 300);
  } else if (mySong.currentTime() > 3.75 && mySong.currentTime() < 4) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    circle(width / 2, height / 2, 250);
  } else if (mySong.currentTime() > 4 && mySong.currentTime() < 4.25) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    circle(width / 2, height / 2, 200);
  } else if (mySong.currentTime() > 4.25 && mySong.currentTime() < 4.5) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    circle(width / 2, height / 2, 150);
  } else if (mySong.currentTime() > 4.5 && mySong.currentTime() < 4.75) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    circle(width / 2, height / 2, 100);
  } else if (mySong.currentTime() > 4.75 && mySong.currentTime() < 5) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    circle(width / 2, height / 2, 50);
  } else if (mySong.currentTime() > 5 && mySong.currentTime() < 5.25) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    circle(width / 2, height / 2, 25);
  } else if (mySong.currentTime() > 5.25 && mySong.currentTime() < 5.5) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    circle(width / 2, height / 2, 13);
  } else if (mySong.currentTime() > 5.5 && mySong.currentTime() < 5.75) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    circle(width / 2, height / 2, 25);
  } else if (mySong.currentTime() > 5.75 && mySong.currentTime() < 6) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    circle(width / 2, height / 2, 50);
  } else if (mySong.currentTime() > 6 && mySong.currentTime() < 6.25) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    circle(width / 2, height / 2, 100);
  } else if (mySong.currentTime() > 6.25 && mySong.currentTime() < 6.5) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    circle(width / 2, height / 2, 150);
  } else if (mySong.currentTime() > 6.5 && mySong.currentTime() < 6.75) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    circle(width / 2, height / 2, 200);
  } else if (mySong.currentTime() > 6.75 && mySong.currentTime() < 7) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    circle(width / 2, height / 2, 250);
  } else if (mySong.currentTime() > 7 && mySong.currentTime() < 7.25) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    circle(width / 2, height / 2, 300);
  } else if (mySong.currentTime() > 7.25 && mySong.currentTime() < 7.5) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    circle(width / 2, height / 2, 350);
  } else if (mySong.currentTime() > 7.5 && mySong.currentTime() < 7.75) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    circle(width / 2, height / 2, 400);
  } else if (mySong.currentTime() > 7.75 && mySong.currentTime() < 8) {
    background(247, 247, 194);
    fill(252, 215, 66);
    strokeWeight(0.3);
    circle(width / 2, height / 2, 450);
  } else if (mySong.currentTime() > 8 && mySong.currentTime() < 8.5) {
    background(252, 215, 66);
  } else if (mySong.currentTime() > 8 && mySong.currentTime() < 10.25) {
    background(242, 245, 202);
    image(yellowEmojis1, 250, 200);
    noStroke();
    textFont(font2, [150]);
    text("your skin", 175, 450);
    fill(255, 219, 36);
  } else if (mySong.currentTime() > 10.25 && mySong.currentTime() < 12) {
    background(242, 245, 202);
    image(yellowStars, 250, 200);
    noStroke();
    textFont(font3, [60]);
    text("oh yeah", 155, 300);
    fill(255, 219, 36);
  } else if (mySong.currentTime() > 12 && mySong.currentTime() < 14.75) {
    background(246, 250, 207);
    image(yellowEmojis3, 250, 250);
    noStroke();
    textFont(font4, [60]);
    text("your skin and bones", 100, 415);
    fill(255, 219, 36);
  } else if (mySong.currentTime() > 14.75 && mySong.currentTime() < 17) {
    background(242, 217, 94);
    image(yellowCaterpillar, 250, 250);
    noStroke();
    textFont(font5, [50]);
    text("turning in...", 150, 150);
    fill("orange");
  } else if (mySong.currentTime() > 17) {
    background(242, 217, 94);
    image(yellowButterflies, 250, 250);
    noStroke();
    textFont(font5, [35]);
    text("...to something beautiful", 100, 150);
    fill("orange");
  }
}
