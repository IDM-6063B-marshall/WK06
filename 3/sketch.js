// TODO: visualize data from JSON

let data = [];
function preload() {
  data = loadJSON("wine.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill()
  background(0, 0, 0)
  stroke (220, 20, 20)
  //json file wants to load itself into an object even though its a list because it is stupid so we have to ask for the values:
  data = Object.values(data);
  print(data[0]);
  //we need it to be a list so we can ask for its length which we can't do when it's an object
  for (let idx = 0; idx < data.length; idx++) {
    //map circle size to price of the wine
let aWine = data[idx];
  let x = map(idx, 0, data.length, 0, width);
  let d = map (aWine.price, 0, 500, 0, height);
  
  ellipse(x, height/2, d)


  }
}

function draw() {}
