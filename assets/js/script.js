
let xPos, yPos;
let dia = 80;
let R, G, B, A = 50;
//initial canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

//continously updates canvas
function draw() {
  //paramaters that are always changing need to be defined inside the function
  xPos = mouseX;
  yPos = mouseY;
  //map(value, start1, stop1, start2, stop2);
  noStroke();
  //remaps RGB values in respect to mouse position
  R = map(mouseX, 0, width, 0, 255);
  G = map(mouseY, 0, height, 0, 150);
  B = map(mouseY, 0, width, 0, 255);
  fill(R, G, B, A); //if using rgba, 0 will make it transparent and 255 completely solid
  circle(xPos, yPos, dia);
}