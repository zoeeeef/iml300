let Textinput;
let button;
let greeting;
let anton;
let blueFlavor;
let orangeFlavor;
let redFlavor;
let yellowFlavor;
let greenFlavor;
let typeWord;
//let imageSize;
let slider;
//let sliderposition;
//let slidersize;
let image1;
//let positionSlider;
//let sizeSlider;


function preload() {
  anton = loadFont("Anton-Regular.ttf");
  blueFlavor = loadImage("big_kid_blue.png");
  orangeFlavor = loadImage("orange-with-green-pop.png");
  redFlavor = loadImage("kid5_1_.png");
  yellowFlavor = loadImage("d6_spk_yellow_-c_ll_hr-319x319_5.png");
  greenFlavor = loadImage("flavor-lime_5.png");
}

function setup() {
  Textinput = createInput();
  Textinput.position(20, 115);
  createCanvas(600, 600);
  background(220);
  //input = createInput();
  //input.position(50, 100);

  slider = createSlider(0, 350, 200); // min, max, start
  slider.size(200, 20); // width and height
  slider.position(205, 100); // x and y
  
  
  button = createButton("submit");
  button.position(int.x + int.width, 115);
  button.mousePressed(greet);
  greeting = createElement(
    "h3",
    "what flavor? 1 = blue raspberry, 2 = cherry, 3 = orange, 4 = lemon, 5 = lime"
  );

  greeting.position(5, 50);
  textAlign(CENTER);
  textSize(20);
  textFont(anton, 20);

//  imageSize = (slider.value(), height / 2, slider.value(), 50);
}

function mousePressed() {
  
  let typeWord = Textinput.value();
  //r = random(204);
  //g = random(255);
  //b = random(255);
  //fill(r, g, b);
  text(typeWord, mouseX, mouseY);
  background(220);
}

function greet() {
  const name = Textinput.value();
  greeting.html("adjust the size using the slider");

  /*for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
  */
}

/*function draw(){
   if (typeWord == 'blu raspberry'); {
    image(blueFlavor, 50, 250); 
  }
  
  if(typeWord == 'cherry');{
    image(redFlavor, 100, 200);
  }
  
   if(typeWord == 'oranges');{
    image(orangeFlavor, 100, 200);
  }
  
     if(typeWord == 'limes');{
    image(greenFlavor, 100, 200);
  }
  
      if(typeWord == 'lemons');{
    image(yellowFlavor, 100, 200);
  }*/

function keyPressed() {{
  let imageSize = slider.value();
  if (key === "1") {
    image(
      blueFlavor,
      random(250),
      random(250),
      imageSize,
      imageSize
    );
  } else if (key == "2") {
    image(
      orangeFlavor,
      random(250),
      random(250),
      imageSize,
      imageSize
    );
  } else if (key == "3") {
    image(
      redFlavor,
      random(250),
      random(250),
       imageSize ,
      imageSize
    );
  } else if (key == "4") {
    image(
      yellowFlavor,
      random(250),
      random(250),
       imageSize ,
      imageSize
    );
  } else if (key == "5") {
    image(
      greenFlavor,
      random(250),
      random(250),
       imageSize ,
      imageSize
    );
  }
}
                      }