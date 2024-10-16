// TODO: add more properties using objects

// curly brackets to define and object
let aCircle = {};

let aList = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  aList = [0, 3, 4, 6];

  //this is an object and its members
  aCircle = {
    x: width / 2,
    y: height / 2,
    d: 60, //diameter
    a: 255, // alpha (color)
  };
}

function draw() {
  background(220, 20, 220);
  fill(255, aCircle.a);
//could also write as aCircle["a"] but aCirlce.a is simpler 
  ellipse(aCircle.x, aCircle.y, aCircle.d);

  aCircle.a = (aCircle.a + 4) % 255;
}
