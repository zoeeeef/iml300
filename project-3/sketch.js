let TVFace;
let blocksFace;
let dustyFace;
let happyFace;
let pixelSkullFace;
let genieLamp;
let robinWilliams;
let dontPlan;
let kingdomDance;
let kingdomSun;
let goldenFlower;
let static;
let canyouhearme;
let genieDust;
let clownLaugh; 
let forceSmile;
let loadingSign;
let birdsFlying;
let likeMe;
let childExpired;
let sadEye;
let creepyLow;
//let pixelSquare;
let littleDark;
let aliceWonder;
let breathe; 
let caroline;
let idontknowhow; 
let revenge; 
let whyareyousomean;
let nightWeMet;
let whoareyou;
let tuyo;
let rusleeping;
let menOnMoon;
let moonClouds;
let g;
let o;
let p;
let v;
let x;
let y;
let playFlag = false;

function preload() {
  TVFace = loadImage("TVFace.png");
  blocksFace = loadImage("blocksFace.png");
  dustyFace = loadImage("dustyFace2.png");
  happyFace = loadImage("happyFace2.png");
  pixelSkullFace = loadImage("skullFace2.png");
  genieLamp = loadImage("genieLamp.png");
  robinWilliams = loadSound("robinWilliams.mp3");
  dontPlan = loadSound("dontPlan.mp3");
  kingdomDance = loadSound("kingdomDance.mp3");
  kingdomSun = loadImage("kingdomSun.png");
  goldenFlower = loadImage("goldenFlower.png");
  static = loadSound("static.mp3");
  canyouhearme = loadImage("canyouhearme.png");
  genieDust = createImg ("genieDust.gif" , "genie dust");
  clownLaugh = loadSound("clownLaugh.mp3");
  forceSmile = createImg("forceSmile.gif", "forced smile");
  loadingSign = createImg ("loadingSign.gif", "loading sign");
  //birdsFlying = createImg ("birdsFlying.gif", "birds flying");
  likeMe = createImg("likeMe.gif", "like me");
  childExpired = loadSound("childExpired.mp3");
  creepyLow = loadSound("creepyLow.mp3");
  sadEye = createImg ("sadEye.gif", "sad eye");
  //pixelSquare = createImg("pixelSqaure.gif", "pixel sqaure");
  littleDark = loadSound("littleDark.mp3");
  aliceWonder = loadSound ("aliceWonder.mp3");
  breathe = loadImage ("breathe.png");
  caroline = loadSound ("caroline.mp3");
  idontknowhow = loadImage ("idontknowhow.png");
  revenge = loadSound ("revenge.mp3")
  whyareyousomean = loadImage("whyareyousomean.png");
  nightWeMet = loadSound ("nightWeMet.mp3");
  whoareyou = loadImage ("whoareyou.png");
  tuyo = loadSound("tuyo.mp3");
  rusleeping= loadImage("rusleeping.png");
    g = createImg("g.png", "green");
  p = createImg ("p.png","pink");
  o = createImg("o.png", "orange");
  v = createImg ("v.png", "blue");
  x = createImg ("x.png", "magenta");
  y = createImg ("y.png", "last one");
  moonClouds = createImg("moonClouds", "moon clouds");
  menOnMoon = loadSound("menOnMoon.mp3");
  

}

function setup() {
  createCanvas(1540, windowWidth);
  noLoop();
}


function draw() {
  background("black");
  image(TVFace, 300, 100);
  image(blocksFace, 900, 200);
  image(happyFace, 600, 300);
  image(pixelSkullFace, 250, 500);
  image(dustyFace, 500, 600);
  image(genieLamp, 700, 400);
    g.position(900,500);
  p.position(950, 650);
  y.position(1000, 600);
  x.position(940, 490);
  v.position (870, 530);
  x.position(900, 507);
  o.position(1000, 550);
    genieDust.position(-2000, -2000);
    forceSmile.position(-2000, -2000);
    loadingSign.position(-2000, -2000);
    likeMe.position(-2000, -2000);
     sadEye.position(-2000,-2000);
  
  
let div = createDiv('disabled & divergent');
div.style('font-size', '100px');
    div.style('color', 'white');
div.position(10, 0);
  
let a = createA('page-2.html', 'how are you');
    a.style("font-size", "30px");
    a.style("color", 'white');
a.position(500,500);
  
  let b = createA('about.html',"about page");
  b.style("font-size", "30px");
  b.style("color", 'white');
  b.position(500, 50);
    
    console.log(g);
   g.class('draggable');
    $(".draggable").draggable();
  p.class('draggable');
    $(".draggable").draggable();
  y.class('draggable');
    $(".draggable").draggable();
  v.class('draggable');
    $(".draggable").draggable();
   x.class('draggable');
    $(".draggable").draggable();
   o.class('draggable');
    $(".draggable").draggable();
  //key a == static sound & can you hear me image
  //key r == robin williams sound and genie dust gif 
  //key L == clown laugh sound and force smile gif 
  
  // else {
  //  dontPlan.play();
  //}

  /*function mouseClicked() {
  static.play();
}
function keyPressed(a) {
  togglePlayMode();
}

function togglePlayMode() {
  if (playMode === 'sustain') {
    playMode = 'restart';
  } else {
    playMode = 'sustain';
  }
  static.playMode(playMode);
}
  
  //function keyPressed() {
  //if (key === "a") {
   
    //static.play();
    
  //}

//let value = 0;

//function mouseClicked () {
  


//function mouseClicked([image]) {
  
  //if mouseClicked ([image])= genieLamp {
    //click on golden flower kingdom dance plays and suns appear
  //}*/
}

function keyTyped() {
    if (key === "a") {
      
      playFlag = !playFlag;
      console.log('a key press', key)
 image (canyouhearme, 50, 50);
      playFlag ? static.play() : static.stop();
      // static.play();
    } else if (key === "r") {
      //playFlag = !playFlag;
      robinWilliams.play();
       genieDust.position(600, 300);
      //playFlag ? robinWilliams.play() : robinWilliams.stop();
    } else if (key === "L") {
      clownLaugh.play();
      forceSmile.position(500, 50);
    }
  else if(key==="i"){
    dontPlan.play();
    loadingSign.position(700, 200);
    
  }
  
  else if (key === "v"){
    childExpired.play();
    likeMe.position(200, 200);
  }
  
  else if (key === "e"){
    creepyLow.play();
    sadEye.position(800,600);
  }
  
  else if (key === "D"){
    littleDark.play();
    loadingSign.position(600,500);
  }
  
  else if (key === "p"){
    aliceWonder.play();
    image (breathe, random(250), random(250));
  }
  
  else if (key === "o"){
    caroline.play();
    image (idontknowhow, random(400), random(600));
    
  }
  else if (key === "g"){
    revenge.play();
    image (whyareyousomean, random(500), random(500));
  }
  
  else if (key === "y"){
    nightWeMet.play();
    image (whoareyou, random(500), random(500));
    
  }
  
  else if (key === "x"){
    tuyo.play();
    image (rusleeping, random(500), random (500));
    
    
  }
  
  }
