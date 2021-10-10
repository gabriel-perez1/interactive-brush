
let xPos, yPos, dia;
let R, G, B, A = 50;
let brush1 = true;
let brush2 = false;
let brush3 = false;
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
  dia = map(mouseY, 0, height, 0, 80); //remaps diameter based on mouse position in y-axis
  //map(value, start1, stop1, start2, stop2);
  noStroke();
  //remaps RGBA values based on mouse position
  R = map(mouseX, 0, width, 0, 255);
  G = map(mouseY, 0, height, 0, 150);
  B = map(mouseY, 0, width, 0, 255);
  A = map(mouseX, 0, width, 0, 255);
  //if statements for keyboard inputs
  if(brush1){
    fill(R, G, B, A); //if using rgba, 0 will make it transparent and 255 completely solid
    circle(xPos, yPos, dia);
  }
  if(brush2){
    fill('lightpink');
    circle(xPos, yPos, dia);
  }
  if(brush3){
    fill('white');
    stroke('red');
    rect(xPos, yPos, dia, dia);
  }
}

//redifines paramaters with keyboard inputs
function keyTyped(){
  if (key === '1') {
    brush1 = !brush1; //will turn brush on/off with keyboard input '1'
  }
  if (key ==='2') {
    brush2 = !brush2; //will make brush pink with keyboard input '2'
  }
  if (key ==='3') {
    brush3 = !brush3; //will make a rectangular white1 brush with keyboard input '3'
  }
}