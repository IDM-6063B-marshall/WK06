// TODO: add more properties using objects
// TODO: create/draw using functions

let NUM_OBJS = 100;
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let cnt = 0; cnt < NUM_OBJS; cnt++) {
    // variable declaration inside the for loop > creates variable aCircle 10 tmes
    let aCircle = {
      //commas matter here
      x: random(width),
      y: random(height),
      d: random(25, 50),
      a: 0,
      da: random(1, 10), //change in alpha per frame
      dx: random (-5, 5),
      dy: random (-5, 5)
    };

    //this adds the aCircle object to the end of the list circles
    circles.push(aCircle);
  }
  print(circles);
}

function draw() {
  background(0, 0, 0);

  for (let idx = 0; idx < circles.length; idx++) {
    //for each number from 0 to 9 we want to access the thing in the circles list
    let mCircle = circles[idx]; //my circle
    //use member elements of our object to draw our circle
    fill(255, mCircle.a);
    ellipse(mCircle.x, mCircle.y, mCircle.d);
    mCircle.a = (mCircle.a + mCircle.da) % 255; // opacity
    mCircle.x = mCircle.x + mCircle.dx;
    mCircle.y = mCircle.y + mCircle.dy;

    //add logic to reset the circles to come on screen

    if(mCircle.x < 0 || mCircle.x > width) {
      mCircle.x = random(width)

    }
    if(mCircle.y < 0 || mCircle.y > height) {
      mCircle.y = random(height)

    }
  }
}
