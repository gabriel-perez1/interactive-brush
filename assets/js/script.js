
let xPos, yPos, dia;

//initial canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

//continously updates canvas
function draw() {
  xPos = 50;
  yPos = 100;
  dia = 80;
  fill('lightpink');
  circle(xPos, yPos, dia);
}