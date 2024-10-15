// TODO: add more properties using objects

let ypos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  ypos = -50;
}

function draw() {
  background(220, 20, 220);
  ellipse(width / 2, ypos, 50);
  ypos += 10;

  if (ypos > height) {
    ypos = -50;
  }
}
