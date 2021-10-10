
let xPos, yPos;
let dia = 80;

//initial canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

//continously updates canvas
function draw() {
  xPos = mouseX;
  yPos = mouseY;
  fill('lightpink');
  circle(xPos, yPos, dia);
}