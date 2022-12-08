let Textinput;
let button;
//let greatToHear;
//let levelOne; 
//let lookingGood;
//let levelTwo;
let levelThree;
let levelFour; 
let levelFive;
let levelSix;
let levelSeven;
let levelOne1;
let levelTwo2;

function preload(){
  //greatToHear = loadImage ("1&2.png")
  //levelOne = loadImage ("4310266.png")
  //lookingGood = loadImage("lookingGood.png")
  //levelTwo = loadImage ("levelTwo.png")
  levelThree = loadImage ("https://cdn.glitch.global/62c74606-c5c9-4edc-a312-42e94c9b2612/Screen%20Shot%202022-11-21%20at%2010.51.41%20AM.png?v=1669846796463")
  levelFour = loadImage ("https://cdn.glitch.global/62c74606-c5c9-4edc-a312-42e94c9b2612/Screen%20Shot%202022-12-03%20at%206.42.22%20PM.png?v=1670121806561")
  levelFive = loadImage ("https://cdn.glitch.global/62c74606-c5c9-4edc-a312-42e94c9b2612/Screen%20Shot%202022-11-21%20at%2011.16.08%20AM.png?v=1669846782406")
  levelSix = loadImage ("https://cdn.glitch.global/62c74606-c5c9-4edc-a312-42e94c9b2612/levelSix.png?v=1670121080020")
  levelSeven = loadImage ("https://cdn.glitch.global/62c74606-c5c9-4edc-a312-42e94c9b2612/sevenLevel.png?v=1669846600551")
  levelOne1 = loadImage("https://cdn.glitch.global/62c74606-c5c9-4edc-a312-42e94c9b2612/levelOne1.png?v=1670121093707")
  levelTwo2 = loadImage("https://cdn.glitch.global/62c74606-c5c9-4edc-a312-42e94c9b2612/levelTwo2.png?v=1670121090335")
  
}

function setup() {
  createCanvas(1400, windowHeight);
  background('white');
  Textinput = createInput();
  Textinput.position(45, 115);
  
   button = createButton("submit");
  button.position(int.x + int.width, 115);
  button.mousePressed(greet);
  greeting = createElement(
    "h3",
    "Using the 1-7 scale, how are you feeling right now?"
  );
  
   greeting.position(5, 50);
  textAlign(CENTER);
  textSize(20);
  
}

function greet() {
  const name = Textinput.value();
  greeting.html("Don't be afraid to feel your feelings!"); }

function keyPressed() {
  //let imageSize = slider.value();
  if (key === "1") {
   
    image (
    levelOne1,
    200,
    100
    );
    
  }
  else if (key == "2"){
    
  
    
    image (
    levelTwo2,
    200,
    100)
    
  }
  
  else if (key == "3"){
    
    image(
    levelThree,
    200,
    100)
    
  }
  
  else if (key =="4"){
    
    image (
    levelFour,
    200,
    100)
    
  }
  
  else if (key=="5"){
    
    image (
    levelFive,
    200,
    100)
  }
  
  else if (key== "6"){
    
    image (
      levelSix,
    200, 
      100)
    
  }
  
  else if (key == "7"){
    image (
    levelSeven,
    200,
    100)
    
  }

} 