//click to turn the oven on
let fireIntensity = 255; // starts with bright red
let isOvenOn = false;
let timeSinceClick = 0;
const fadeDuration = 30 * 60; // 30 seconds

function setup() {
  createCanvas(600, 600);
}

function draw() {
 background('#F9DDD8');
  
  //stoves on top
  stroke(0,0,0);
  fill('#F9DDD8');
  rect(150,190,100,20,20); 
  rect(350,190,100,20,20); 

  //full oven
  noStroke();
  fill('#799567')
  rect(100,200,410,320,10)
  
  //inside oven
  fill(50,50,50)
  rect(180,285,250,195)
  
  //top bar
  fill(50,50,50)
  rect(100,200,410,40,5)
  
  //handle base/holder
  fill(192,192,192)
  circle(120,265,30)
  circle(490,265,30)
  
  //oven buttons and handle
  fill(203,179,122)
  circle(350,220,15)
  circle(390,220,15)
  circle(410,220,15)
  circle(430,220,15)
  
  rect(115,258,380,15,15)
  
  if (isOvenOn) {
    // gradually decreases the fire
    fireIntensity = map(timeSinceClick, 0, fadeDuration, 255, 0);
    fireIntensity = constrain(fireIntensity, 0, 255); // make sure it doesn't go below 0

    // fill with fading red color
    fill(fireIntensity, 0, 0); 

    // increase time counter
    timeSinceClick++;
  } else {
    fill(50,50,50); // default color
  }

  rect(180, 285, 250, 195);

  // turns off oven completely after 30 seconds
  if (timeSinceClick >= fadeDuration) {
    isOvenOn = false;
  }
}

function mousePressed() {
  isOvenOn = true;      // turn on oven when mouse is pressed
  timeSinceClick = 0;   // reset the time counter
  fireIntensity = 255;  // reset the fire intensity to full
  
  
}