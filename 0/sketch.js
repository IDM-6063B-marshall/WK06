// TODO: add more circles using lists

// let ypos;

// let ypos0;
// let ypos1;
// let ypos2;

// making this scalable with a list
let numCircles;
// let ypos = [0, 0, 0];
let ypos = [];

// this list contains three elements which are ypos0, ypos1, ypos2
// could also change an element by saying eg let ypos2 = 10

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // ypos0 = -50;
  // ypos1 = -50;
  // ypos2 = -50;

  // wrap a calculation with int to only get whole numbers
  numCircles = 10;
  // below doesn't work anymore bc list is empty
  // for (let idx = 0; idx < ypos.length; idx += 1) {
  //   // print(idx)
  //   if (ypos[idx] > random(height)) {
  //   }

  // this makes it possible to populate the empty list
  for (let idx = 0; idx < numCircles; idx += 1) {
    //this is putting the number 0 at the end of the ypos list
    ypos.push(random(height));
  }
  print(ypos);
}

function draw() {
  background(220, 20, 220);
  // ellipse(width / 2 - 100, ypos0, 50);
  // ellipse(width / 2, ypos1, 50);
  // ellipse(width / 2 + 100, ypos2, 50);

  // square brackets plus the position of the list i want to access
  // ellipse(width / 2 - 100, ypos[0], 50);
  // ellipse(width / 2, ypos[1], 50);
  // ellipse(width / 2 + 100, ypos[2], 50);

  // ypos[0] += 8;
  // ypos[1] += 11;
  // ypos[2] += 17;

  // if (ypos[0] > height) {
  //   ypos[0] = -50;
  // }
  // if (ypos[1] > height) {
  //   ypos[1] = -50;
  // }
  // if (ypos[2] > height) {
  //   ypos[2] = -50;
  // }

  //applying this logic to a list of unknown length
  //making the list be depdendent on the width
  for (let idx = 0; idx < ypos.length; idx += 1) {
    let xpos = map(idx, 0, ypos.length, 0, width);
    ellipse(xpos + 25, ypos[idx], 50);
    // print(idx)
    ypos[idx] += 8;
    if (ypos[idx] > height) {
      // ypost[idx] = -50;
      ypos[idx] = random(-60, -50);
    }
  }
}

//adding elements to the end of the list
function mousePressed(){
ypos.push(random(height));
print (ypos.length)
}