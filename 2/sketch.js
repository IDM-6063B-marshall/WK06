// TODO: add more properties using objects
// TODO: create/draw using functions

let NUM_OBJS = 10;
let xs = [];
let ys = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < NUM_OBJS; i++) {
    xs.push(random(width));
    ys.push(random(-50, -20));
  }
}

function draw() {
  background(220, 20, 220);  
}
