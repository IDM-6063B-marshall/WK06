// TODO: add more circles using lists

let ypos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  noStroke();

  ypos = -50;
}

function draw() {
  background(220, 20, 220);
  ellipse(width / 2, ypos, 50);
  ypos += 8;

  if (ypos > height) {
    ypos = -50;
  }
}
